import { describe, it, expect } from 'vitest';
import { validateCitations } from './citation-validator';

describe('validateCitations', () => {
  it('should be valid when no numbers are present', () => {
    const response = 'The company is doing well and growing steadily.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(true);
  });

  it('should be valid with single digits (which the regex ignores)', () => {
    const response = 'I found 5 new employees today.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(true);
  });

  it('should be invalid when a large number is present without a citation', () => {
    const response = 'The company has 100 employees.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.error).toContain('Response contains 1 numeric value(s) but no [Source:...] citations');
    expect(result.uncitedNumbers).toEqual(['100']);
  });

  it('should be invalid when a number with comma is present without a citation', () => {
    const response = 'We generated 1,000 leads last month.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['1,000']);
  });

  it('should be invalid when a number with decimals is present without a citation', () => {
    const response = 'The growth rate is 10.5 points.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['10.5']);
  });

  it('should be invalid when a percentage is present without a citation', () => {
    const response = 'Our profit increased by 15%.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['15%']);
  });

  it('should be invalid when a decimal percentage is present without a citation', () => {
    const response = 'The margin is 99.9%.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['99.9%']);
  });

  it('should be invalid when a currency value is present without a citation', () => {
    const response = 'The revenue was $100 this year.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['$100']);
  });

  it('should be invalid when a complex currency value is present without a citation', () => {
    const response = 'The total was $1,234.56.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['$1,234.56']);
  });

  it('should be invalid when multiple numerical formats are present without a citation', () => {
    const response = 'Revenue was $5,000 with a 20.5% margin and 150 new signups.';
    const result = validateCitations(response, []);
    expect(result.valid).toBe(false);
    expect(result.uncitedNumbers).toEqual(['$5,000', '20.5%', '150']);
  });

  it('should be valid when numbers are present AND a citation is provided', () => {
    const response = 'The company has 100 employees. [Source: hr_db | 1 records | as of 2/15/2024]';
    const result = validateCitations(response, ['hr_db']);
    expect(result.valid).toBe(true);
  });

  it('should be valid when multiple numbers are present AND a citation is provided', () => {
    const response = 'Revenue was $5,000 with a 20.5% margin. [Source: finance_db | 1 records | as of 2/15/2024]';
    const result = validateCitations(response, ['finance_db']);
    expect(result.valid).toBe(true);
  });
});

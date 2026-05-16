export interface ValidationResult {
  valid: boolean
  error?: string
  uncitedNumbers?: string[]
}

export function validateCitations(
  response: string,
  availableCitationRefs: string[]
): ValidationResult {
  // Extract all numbers from response (currency $X, percentages X%, bare counts 100+)
  // IMPORTANT: Single-backslash escapes in regex LITERALS are correct here.
  const numberPattern = /\$[\d,]+\.?\d*|[\d,]+\.?\d+%|[\d,]{2,}(?:\.\d+)?/g
  const numbers = response.match(numberPattern) || []

  if (numbers.length === 0) {
    // No numeric claims — nothing to cite
    return { valid: true }
  }

  // Check the response contains at least one [Source: ...] citation tag
  const citationPattern = /\[Source:[^\]]+\]/g
  const citations = response.match(citationPattern) || []

  if (citations.length === 0) {
    return {
      valid: false,
      error: `Response contains ${numbers.length} numeric value(s) but no [Source:...] citations`,
      uncitedNumbers: numbers
    }
  }

  return { valid: true }
}

export function buildCitationString(toolResult: {
  citationRef: string
  recordCount: number
  dataAsOf: string
}): string {
  return `[Source: ${toolResult.citationRef} | ${toolResult.recordCount} records | as of ${new Date(toolResult.dataAsOf).toLocaleDateString()}]`
}

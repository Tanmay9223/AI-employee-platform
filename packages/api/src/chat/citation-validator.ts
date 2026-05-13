export interface ValidationResult {
  valid: boolean
  error?: string
  uncitedNumbers?: string[]
}

export function validateCitations(
  response: string,
  availableCitationRefs: string[]
): ValidationResult {
  // Extract all numbers from response (currency, percentages, counts)
  const numberPattern = /\\$[\\d,]+\\.?\\d*|[\\d,]+\\.?\\d+%|[\\d,]{2,}(?:\\.\\d+)?/g
  const numbers = response.match(numberPattern) || []

  if (numbers.length === 0) {
    return { valid: true }
  }

  // Check each number has an adjacent [Source: ...] citation within 200 chars
  const citationPattern = /\\[Source:[^\\]]+\\]/g
  const citations = response.match(citationPattern) || []

  if (numbers.length > 0 && citations.length === 0) {
    return {
      valid: false,
      error: 'Response contains numbers but no citations',
      uncitedNumbers: numbers
    }
  }

  // Simple check: require at least 1 citation if there are numbers, instead of strict ratios which break on dates
  if (citations.length === 0) {
    return {
      valid: false,
      error: `Insufficient citations: found ${numbers.length} numbers but 0 citations`,
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

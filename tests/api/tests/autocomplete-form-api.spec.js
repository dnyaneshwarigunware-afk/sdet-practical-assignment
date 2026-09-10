import { test, expect } from '@playwright/test';

const validResponse = {
  account_id: '98765',
  account_email: '<TEST_EMAIL>',
  start_date: '2024-03-15T10:30:00',
  end_date: '2024-03-15T10:32:00',
  locale: 'en',
  text: 'agile methodology',
  suggestion_list: 'agile methodology, agile methodology process, agile methodology process testing',
  completed: true,
};

const defectiveResponse = {
  account_id: '98765',
  account_email: '<TEST_EMAIL>',
  start_date: '2024-03-15T10:30:00Z',
  end_date: '2024-03-15T10:32:00Z',
  locale: 'en',
  text: 'agile methodology',
  suggestion_list: 'agile methodology, agile methodology process, agile methodology process testing',
  completed: 'true',
};

const requiredProperties = [
  'account_id',
  'account_email',
  'start_date',
  'end_date',
  'locale',
  'text',
  'suggestion_list',
  'completed',
];

function validateRequiredProperties(response) {
  for (const property of requiredProperties) {
    expect(response, `Missing required property: ${property}`).toHaveProperty(property);
  }
}

function isValidTimestamp(value) {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value));
}

function isValidLocale(value) {
  if (typeof value !== 'string' || value.trim() === '') {
    return false;
  }

  try {
    Intl.getCanonicalLocales(value);
    return true;
  } catch {
    return false;
  }
}

function validateDataTypes(response) {
  expect(typeof response.account_email).toBe('string');
  expect(typeof response.locale).toBe('string');
  expect(typeof response.text).toBe('string');
  expect(typeof response.suggestion_list).toBe('string');
  expect(typeof response.completed).toBe('boolean');
  expect(isValidTimestamp(response.start_date)).toBeTruthy();
  expect(isValidTimestamp(response.end_date)).toBeTruthy();
}

function parseSuggestionList(value) {
  return typeof value === 'string' ? value.split(',').map((item) => item.trim()).filter(Boolean) : [];
}

test.describe('Task 5 — API contract validation (fixture-based)', () => {
  test('TEST 1 — FR-05 response schema contains all required properties', () => {
    validateRequiredProperties(validResponse);
  });

  test('TEST 2 — Positive data types match the approved contract', () => {
    expect(() => validateDataTypes(validResponse)).not.toThrow();
    expect(validResponse.completed).toBe(true);
  });

  test('TEST 3 — start_date and end_date are valid timestamp values', () => {
    expect(isValidTimestamp(validResponse.start_date)).toBeTruthy();
    expect(isValidTimestamp(validResponse.end_date)).toBeTruthy();
  });

  test('TEST 4 — locale conforms to IETF BCP 47', () => {
    expect(isValidLocale(validResponse.locale)).toBeTruthy();
    expect(validResponse.locale).toBe('en');
  });

  test('TEST 5 — suggestion_list contains only matching suggestions for the input value', () => {
    const inputValue = 'agile methodology process';
    const expectedMatches = ['agile methodology process', 'agile methodology process testing'];
    const searchResponse = {
      ...validResponse,
      text: inputValue,
      suggestion_list: expectedMatches.join(', '),
    };

    const actualMatches = parseSuggestionList(searchResponse.suggestion_list);

    expect(actualMatches).toEqual(expectedMatches);
    expect(actualMatches).toContain('agile methodology process');
    expect(actualMatches).toContain('agile methodology process testing');
    expect(actualMatches).not.toContain('agile methodology');
    expect(actualMatches.every((item) => item.startsWith(inputValue))).toBeTruthy();
  });

  test('TEST 6 — Negative case: missing required field fails schema validation', () => {
    const invalidResponse = { ...validResponse };
    delete invalidResponse.account_email;

    expect(invalidResponse).not.toHaveProperty('account_email');
    expect(() => validateRequiredProperties(invalidResponse)).toThrow();
  });

  test('TEST 7 — Negative case: completed string value fails Boolean validation', () => {
    const invalidResponse = { ...defectiveResponse };

    expect(invalidResponse.completed).toBe('true');
    expect(() => validateDataTypes(invalidResponse)).toThrow();
  });

  test('TEST 8 — Known sample discrepancy: timestamps use UTC serialization', () => {
    expect(defectiveResponse.start_date.endsWith('Z')).toBeTruthy();
    expect(defectiveResponse.end_date.endsWith('Z')).toBeTruthy();
  });
});

// This file validates the approved API contract using fixture objects because the assignment does
// not provide a real API endpoint, HTTP method, request payload, or authentication details.

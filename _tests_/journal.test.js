import Entry from './../src/js/journal.js';

describe('Entry', () => {
  let entry;

  beforeEach(() => {
  entry = new Entry('Test Title', 'This is a test body.');
  });

  test('should calculate word count', () => {
    expect(entry.wordCount()).toEqual(5);
  });

  test('should calculate vowel count', () => {
    expect(entry.vowelCount()).toEqual(5);
  });

  test('should calculate consonant count', () => {
    expect(entry.consonantCount()).toEqual(10);
  });

  test('should generate a teaser', () => {
    expect(entry.getTeaser()).toEqual('This is a test body');
  });
});
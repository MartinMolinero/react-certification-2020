import { formatDate } from './dateUtils';

describe('Date utils', () => {
  it('returns empty string if the date was not provided', () => {
    expect(formatDate()).toBe('');
  });
  it('returns the formatted date correctly', () => {
    expect(formatDate('2020-09-26T09:23:11Z')).toBe('26/09/2020');
  });
});

function postedAt(date: string | number | Date): string {
  const now: Date = new Date();
  const posted: Date = new Date(date);
  const diff = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  const formatUnit = (value: number, unit: string): string => {
    if (value === 1) {
      return 'a ' + unit;
    }
    return `${value} ${unit}${value > 1 ? 's' : ''}`;
  };

  if (diffYears > 0) {
    return formatUnit(diffYears, 'year') + ' ago';
  }
  if (diffMonths > 0) {
    return formatUnit(diffMonths, 'month') + ' ago';
  }
  if (diffDays > 0) {
    return formatUnit(diffDays, 'day') + ' ago';
  }
  if (diffHours > 0) {
    return formatUnit(diffHours, 'hour') + ' ago';
  }
  if (diffMinutes > 0) {
    return formatUnit(diffMinutes, 'minute') + ' ago';
  }
  if (diffSeconds > 0) {
    return formatUnit(diffSeconds, 'second') + ' ago';
  }

  return 'now';
}

const generateUniqueId = (): number => {
  // Generate a random number between 1 and 1000000 (adjust the range as needed)
  const randomNumber = Math.floor(Math.random() * 1000000) + 1;
  // Combine with the current timestamp to ensure uniqueness
  const uniqueId = Date.now() * 1000000 + randomNumber;
  return uniqueId;
};

export { postedAt, generateUniqueId };

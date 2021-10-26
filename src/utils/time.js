export const findDayFromPicker = (date, dates) => {
  const dayFromPicker = dates.filter(
    (element) =>
      element.date === date.date &&
      element.month === date.month &&
      element.year === date.year
  );
  if (dayFromPicker.length === 1) {
    const day = dayFromPicker[0];
    return day;
  }
  return false;
};

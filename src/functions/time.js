const timeValidator = (start, end, day) => {
  const endTime = `${parseInt(end) - 1}:00`;
  let result = true;
  let wasStart = false;
  let wasEnd = false;
  day.reserveTime.forEach((time, i) => {
    if (time.hour === start) wasStart = true;
    if (time.hour === endTime) wasEnd = true;
    if (time.hour === start && !time.isFree) {
      result = false;
      return result;
    }
    if (wasStart && !wasEnd && !time.isFree) {
      result = false;
      return result;
    }
    if (time.hour === endTime && !time.isFree) {
      result = false;
      return result;
    }
  });

  return result;
};

export default timeValidator;

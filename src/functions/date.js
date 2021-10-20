import { addDays, getYear, eachDayOfInterval } from 'date-fns';

function getNameofMounth(month) {
  month += 1;
  let mounthName = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
  };
  for (const key in mounthName) {
    if (Object.hasOwnProperty.call(mounthName, key)) {
      if (+key === month) {
        const element = mounthName[key];
        return element;
      }
    }
  }
}

function getDayOfWeek() {
  return {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    0: 'Воскресенье',
  };
}

const today = new Date();
const twoMontsFromNow = addDays(today, 62);
const twoMonthsArray = eachDayOfInterval({
  start: today,
  end: twoMontsFromNow,
});

function getData(dateArray) {
  return dateArray.map((date) => {
    const dayWeekNumber = date.getDay();
    const month = date.getMonth();
    return {
      date: date.getDate(),
      dayofWeek: getDayOfWeek()[dayWeekNumber],
      monthName: getNameofMounth(month),
      month,
      year: getYear(date),
      reserveTime: [
        {
          hour: '10:00',
          isFree: false,
          customer: null,
        },
        {
          hour: '11:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '12:00',
          isFree: false,
          customer: null,
        },
        {
          hour: '13:00',
          isFree: false,
          customer: null,
        },
        {
          hour: '14:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '15:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '16:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '17:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '18:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '19:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '20:00',
          isFree: true,
          customer: null,
        },
        {
          hour: '21:00',
          isFree: true,
          customer: null,
        },
      ],
      id: Math.random().toString(36).substr(2, 9),
    };
  });
}

function createData() {
  return getData(twoMonthsArray);
}

export default createData;

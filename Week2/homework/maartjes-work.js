'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const tasks = monday.concat(tuesday);

const durationInHours = tasks.map(x => {
  return x.duration / 60;
});
console.log('Duration in hours: ' + durationInHours);

const moreThanTwoHours = durationInHours.filter(x => {
  if (x >= 2) {
    return x;
  }
});
console.log('Durations more than 2 hours: ' + moreThanTwoHours);

const perHourRate = moreThanTwoHours.map(x => {
  return x * 20;
});
console.log('Earnings: ' + perHourRate);
const earnings = '€' + perHourRate.reduce((a, b) => a + b, 0).toFixed(2);
console.log('Maartje has earned: ' + earnings);

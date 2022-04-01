import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const CalendarFinal = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //   const [activeDate, setActiveDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());
  const [weekDay, setWeekday] = useState(date.getDay());

  const buildHeader = () => {
    return weekDays.map((i, idx) => (
      <View style={styles.item} key={idx}>
        <Text>{i}</Text>
      </View>
    ));
  };
  const swapMonth = (month, type) => {
    switch (type) {
      case 'prev':
        if (month === 0) {
          setYear(year - 1);
          setMonth(11);
        } else {
          setMonth(month - 1);
        }
        break;
      default:
        if (month === 11) {
          setYear(year + 1);
          setMonth(0);
        } else {
          setMonth(month + 1);
        }
    }
  };

  const header = buildHeader();

  const days = new Array(2).fill('test');

  const buildMonthRow = arr => {
    return (
      <View style={styles.daysRow}>
        {arr.map((i, idx) => (
          <View style={styles.dayItem} key={idx}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  };

  const getWeekArrs = () => {
    console.log(`
    ####SA MA FUT iN calendar:
    date: ${date}
    <br>
    year: ${year}
    month: ${month}
    day: ${day}
    weekDay: ${weekDay}
  `);
    // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const maxDays = nDays[month];
    console.log(`MAX DAYS: ${maxDays}`);
    //week 0

    //week 1
    let firstDay = 0;
    const row2 = weekDays.map((i, idx) => {
      if (idx === weekDay - 1) {
        return day;
      } else {
        if (idx < weekDay) {
          return day - idx - 1;
        } else {
          const output = day + idx;

          if (output <= maxDays) {
            return output;
          } else {
            firstDay += 1;
            return firstDay;
          }
        }
      }
    });
    let lastDay = row2[0] - 1;
    const row1 = weekDays
      .map((i, idx) => {
        if (idx === 0) {
          return row2[0] - 1;
        } else {
          return lastDay - idx;
          // return 2;
        }
      })
      .reverse();

    let firstDayRow3 = row2[6];
    const row3 = weekDays.map((i, idx) => {
      if (idx === 0) {
        return firstDayRow3;
      }
    });
    console.log(row2);
    // console.log(row1);
    // console.log(row3);

    return [
      row1,
      // [21, 22, 23, 24, 25, 26, 27],
      // [28, 29, 30, 31, '01', '02', '03'],
      row2,
      ['04', '05', '06', '07', '08', '09', 10],
      [11, 12, 13, 14, 15, 16, 17],
    ];
  };

  const rows = getWeekArrs();

  const firstRow = buildMonthRow(rows[0]);
  const secondRow = buildMonthRow(rows[1]);
  const thirdRow = buildMonthRow(rows[2]);
  const fourthRow = buildMonthRow(rows[3]);

  const output = <View style={styles.header}>{header}</View>;
  const buttons = (
    <View style={styles.controlsContainer}>
      <TouchableOpacity
        style={styles.control}
        onPressIn={() => swapMonth(month, 'prev')}>
        <Text>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.control}
        onPressIn={() => swapMonth(month, 'next')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.crtDateContainer}>
        <Text style={styles.crtDate}>{weekDays[weekDay]}</Text>
        <Text> &nbsp; {day} &nbsp;</Text>
        <Text style={styles.crtDate}>{months[month]}</Text>
        <Text style={styles.crtDate}> {year}</Text>
      </View>
      {output}
      {firstRow}
      {secondRow}
      {thirdRow}
      {fourthRow}
      {buttons}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  item: {
    margin: 15,
  },
  controlsContainer: {
    flexDirection: 'row',
  },
  control: {
    margin: 70,
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 10,
  },
  crtDate: {
    textAlign: 'center',
  },
  crtDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  daysRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.5,
  },
  dayItem: {
    margin: 20,
  },
});

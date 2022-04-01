import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const renderRow = i => {
  return (
    <View key={Math.random()}>
      <Text style={styles.calendarCell}>{i}</Text>
    </View>
  );
};
export const CalendarFinal2 = () => {
  const [monthAndYear, setMonthAndYear] = useState(
    `${months[currentMonth]} ${currentYear}`,
  );

  const showCalendar = (currentMonth, currentYear) => {
    const bodyRows = [
      // [1, 2, 3, 4, 5, 6, 7],
      // [8, 9, 10, 11, 12, 13, 14],
      // [1, 2, 3, 4, 5, 6, 7],
      // [1, 2, 3, 4, 5, 6, 7],
      // [1, 2, 3, 4, 5, 6, 7],
    ];
    let row = [];
    let date = 1;
    for (let i = 1; i <= 35; i++) {
      row.push(date);
      if (i % 7 === 0) {
        bodyRows.push(row);
        row = [];
      }
      date++;
    }

    return (
      <View>
        <View style={styles.calendarRow}>
          {/* header */}
          {weekDays.map(i => {
            return renderRow(i);
          })}
        </View>
        {/* rows */}
        <View style={styles.calendarRow}>
          {bodyRows[0].map(i => {
            return renderRow(i);
          })}
        </View>
        <View style={styles.calendarRow}>
          {bodyRows[1].map(i => {
            return renderRow(i);
          })}
        </View>
        <View style={styles.calendarRow}>
          {bodyRows[2].map(i => {
            return renderRow(i);
          })}
        </View>
        <View style={styles.calendarRow}>
          {bodyRows[3].map(i => {
            return renderRow(i);
          })}
        </View>
        <View style={styles.calendarRow}>
          {bodyRows[4].map(i => {
            return renderRow(i);
          })}
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text>{monthAndYear}</Text>
      {showCalendar()}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  calendarCell: {
    margin: 15,
  },
});

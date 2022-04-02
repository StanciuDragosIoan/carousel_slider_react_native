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
    let firstDay = new Date(currentYear, currentMonth).getDay();
    let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
    const bodyRows = [];
    let row = [];
    let date = 1;
    for (let i = 1; i <= 35; i++) {
      if (date <= daysInMonth) {
        //calendar position
        const weekPosition = new Date(currentYear, currentMonth, date).getDay();

        console.log(weekPosition);

        row[weekPosition] = date;
      }
      // 7 days
      if (row.length === 7) {
        bodyRows.push(row);
        row = [];
      }

      date++;
    }

    console.log(new Date(2022, 3, 1).getDay());

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
      {showCalendar(currentMonth, currentYear)}
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

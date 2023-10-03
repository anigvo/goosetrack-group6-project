import React from 'react'

export const DayPicker = () => {
  return (
    <div>DayPicker</div>
  )
}
 





























//                       DAY
// const [filterDay, setFilterDay] = useState(selectedDate.getDay());
  // const currentDay = new Date().getDay();
  //   // const selectedDay = filterDay;
  //   // const day = date.getDay();

  // const handleDayChange = date => {
  //   const selectedDay = date.getDay();
  //   if (selectedDay !== filterDay) {
  //     setFilterDay(selectedDay);
  //     setSelectedHeaderDate(date);
  //   }
  //   const handlePrevDay = () => {
  //     const prevDay = new Date(selectedDate);
  //     prevDay.setDate(prevDay.getDate() - 1);
  //     setSelectedDate(prevDay);
  //     setFilterDay(prevDay.getDay());
  //     onPrevDay();
  //   };

  //   const handleNextDay = () => {
  //     const nextDay = new Date(selectedDate);
  //     nextDay.setDate(nextDay.getDate() + 1);
  //     setSelectedDate(nextDay);
  //     setFilterDay(nextDay.getDay());
  //     onNextDay();
  //   };
import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import '../../../utils/datePickerUser.css';

import {
  General,
  Option,
  Buttons,
  ButtonData,
  IconNext,
  List,
  Item,
  Icon,
  Arrow,
  Arrows,
  IconPrev,
} from './Statistics.styled';
// import { CustomCalendar, StatisticsChart } from '../index';
import { StatisticsChart } from '../index';

const Statistics = () => {
  const [currentDayMonth, setCurrentDayMonth] = useState(new Date());

  const Datepickerinput = forwardRef(({ value, onClick }, ref) => (
    <ButtonData className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </ButtonData>
  ));

  const handleLastDay = () => {
    const newDate = new Date(currentDayMonth);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDayMonth(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDayMonth);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDayMonth(newDate);
  };

  return (
    <General>
      <Option>
        <Buttons>
          <DatePicker
            selected={currentDayMonth}
            onChange={date => setCurrentDayMonth(date)}
            customInput={<Datepickerinput />}
            dateFormat="dd MMMM yyyy"
            className="react-datepicker-wrapper"
            formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
            calendarStartDay={1}
          />
          <Arrows>
            <Arrow prev type="button" onClick={handleLastDay}>
              <IconPrev />
            </Arrow>
            <Arrow next type="button" onClick={handleNextDay}>
              <IconNext />
            </Arrow>
          </Arrows>
        </Buttons>
        <List>
          <Item>
            <Icon showFor="month" />
            By Day
          </Item>
          <Item>
            <Icon showFor="day" />
            By Month
          </Item>
        </List>
      </Option>

      <StatisticsChart
        currentDayMonth={currentDayMonth}
        setCurrentDayMonth={setCurrentDayMonth}
      />
    </General>
  );
};

export default Statistics;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectFullDate,
  selectIsLoadingTasks,
  selectTodosAndInProgress,
} from 'redux/selectors';
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';
import {
  startOfMonth,
  startOfWeek,
  isSunday,
  isMonday,
  isTuesday,
  endOfMonth,
  getDaysInMonth,
  isSameDay,
  format,
  isSameMonth,
} from 'date-fns';
import {
  СalendarGrid,
  CalendarDay,
  CalendarItem,
  CalendarTask,
  CalendarDayWrapper,
  CalendarTaskList,
  CalendarTaskItem,
  TaskSpan,
} from './CalendarTable.styled';
import { Loader } from 'components/Loader/Loader';
export const CalendarTable = ({ changePeriod }) => {
  const isLoading = useSelector(selectIsLoadingTasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTodosAndInProgress);
  const reduxDate = useSelector(selectFullDate);
  const currentDate = new Date(reduxDate);
  const chooseDay = () => {
    let startOfMonthDate = startOfMonth(currentDate);
    let endOfMonthDate = endOfMonth(currentDate);
    let startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
    let daysToAdd = 35;
    if (
      getDaysInMonth(currentDate) === 28 ||
      getDaysInMonth(currentDate) === 29
    ) {
      if (isMonday(startOfMonthDate)) {
        return {
          startOfWeekDate,
          daysToAdd: 28,
        };
      } else if (getDaysInMonth(currentDate) === 29) {
        return {
          startOfWeekDate,
          daysToAdd: 35,
        };
      } else {
        return {
          startOfWeekDate,
          daysToAdd: 35,
        };
      }
    } else if (isTuesday(endOfMonthDate) && isMonday(startOfMonthDate)) {
      daysToAdd = 35;
    } else if (
      isSunday(startOfMonthDate) ||
      isMonday(endOfMonthDate) ||
      isTuesday(endOfMonthDate)
    ) {
      daysToAdd = 42;
    }

    return {
      startOfWeekDate,
      daysToAdd,
    };
  };

  const { startOfWeekDate, daysToAdd } = chooseDay();

  const [fixedDate] = useState(currentDate);
  const day = new Date(startOfWeekDate);
  const daysArray = [...Array(daysToAdd)].map(() => {
    const currentDay = new Date(day);
    day.setDate(day.getDate() + 1);
    return currentDay;
  });

  const isCurrentDay = day => isSameDay(day, fixedDate);

  const handleDateClick = date => {
    const day = date.getDate();
    changePeriod('day');
    navigate(`/calendar/day/${day}`);
    dispatch(setCurrentDay(date.getDate()));
    dispatch(setCurrentMonth(date.getMonth()));
    dispatch(setCurrentYear(date.getFullYear()));
  };

  const filterTasksByDate = (tasks, date) => {
    return tasks.filter(task => {
      const taskDate = new Date(task.date);
      return isSameDay(taskDate, date);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader type={'suspense'} />
      ) : (
        <СalendarGrid>
          {daysArray.map(dayItem => {
            const tasksForDay = filterTasksByDate(tasks, dayItem);
            return (
              <CalendarItem
                key={format(dayItem, 'ddMMyyyy')}
                onClick={() => handleDateClick(dayItem)}
                disabled={!isSameMonth(dayItem, currentDate)}
                aria-label="Calendar cell"
              >
                <CalendarDayWrapper>
                  <CalendarDay
                    isCurrentDay={isCurrentDay(dayItem)}
                    isCurrentDayMonth={isSameMonth(dayItem, currentDate)}
                  >
                    {format(dayItem, 'd')}
                  </CalendarDay>
                </CalendarDayWrapper>
                <CalendarTask>
                  <CalendarTaskList>
                    {isSameMonth(dayItem, currentDate) ? (
                      <>
                        {window.innerWidth > 767
                          ? tasksForDay.slice(0, 2).map((task, index) => (
                              <CalendarTaskItem
                                key={index}
                                id={task._id}
                                priority={task.priority}
                                text={task.title}
                                date={task.date}
                              >
                                {task.title}
                              </CalendarTaskItem>
                            ))
                          : tasksForDay.slice(0, 1).map((task, index) => (
                              <CalendarTaskItem
                                key={index}
                                id={task._id}
                                priority={task.priority}
                                text={task.title}
                                date={task.date}
                              >
                                {task.title}
                              </CalendarTaskItem>
                            ))}
                        {window.innerWidth > 767 ? (
                          tasksForDay.length > 2 ? (
                            <TaskSpan>
                              ... and {tasksForDay.length - 2} more
                            </TaskSpan>
                          ) : null
                        ) : tasksForDay.length > 1 ? (
                          <TaskSpan>
                            ... and {tasksForDay.length - 1} more
                          </TaskSpan>
                        ) : null}
                      </>
                    ) : null}
                  </CalendarTaskList>
                </CalendarTask>
              </CalendarItem>
            );
          })}
        </СalendarGrid>
      )}
    </>
  );
};

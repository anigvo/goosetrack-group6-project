import React, { useState, useEffect } from 'react';
import { TaskFormWrapper, TimeDiv, AddIcon, LoaderCont } from './TaskForm.styled';
import { getTasks } from '../../api/tasks';
import { isSameDay } from 'date-fns';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createUserTasks, updateUserTask } from 'redux/tasks/operations';
import { selectFullDate } from 'redux/selectors';
import { FcHighPriority } from 'react-icons/fc';
import { LuTimerOff } from 'react-icons/lu';
import { BsDatabaseExclamation } from 'react-icons/bs'
import { FaRegCalendarTimes } from 'react-icons/fa'
import { BiTask } from 'react-icons/bi';
import { nanoid } from '@reduxjs/toolkit';

function TaskForm({ taskToEdit, onCancel, id, category }) {
  const currentDate = useSelector(selectFullDate);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    start: '09:00',
    end: '14:00',
    priority: [],
    date: '',
    category: category,
    isEditing: !!id,
  });

  useEffect(() => {
    if (taskToEdit) {
      const { title, start, end, priority, date, category } = taskToEdit;
      setFormData({
        title,
        start,
        end,
        priority,
        date,
        category,
        isEditing: true,
      });
    }
  }, [taskToEdit, id]);

  const isCurrentDay = day => isSameDay(day, new Date());

  useEffect(() => {
    if (!formData.date || !isCurrentDay(new Date(formData.date))) {
      const date = new Date(currentDate);
      const formattedDate = date.toISOString().split('T')[0];
      setFormData(prevData => ({
        ...prevData,
        date: formattedDate,
      }));
    }
  }, [taskToEdit, formData.date, currentDate]);

  useEffect(() => {
    async function fetchTaskById() {
      if (id) {
        try {
          const tasks = await getTasks('day', formData.date);
          const taskToPopulate = tasks.find(task => task._id === id);

          if (taskToPopulate) {
            const dateParts = taskToPopulate.date.split('T')[0].split('-');
            const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;

            const { title, start, end, priority, category } = taskToPopulate;
            setFormData({
              title,
              start,
              end,
              priority,
              date: formattedDate,
              category,
              isEditing: true,
            });
          }
        } catch (error) {
          return;
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchTaskById();
  }, [id, formData.date]);

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'end' && value < formData.start) {
      toast.error('Incorrect time format or start >= end.', {
        icon: <LuTimerOff size={24} color='#EA3D65' />
      });
      return;
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'start') {
      updateEndTime(value);
    }
  };

  const updateEndTime = selectedStartTime => {
    const [startHour, startMinute] = selectedStartTime.split(':').map(Number);

    let endHour = startHour + 1;
    if (endHour > 23) {
      endHour = 23;
    }

    const formattedEndTime = `${endHour
      .toString()
      .padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;

    setFormData(prevData => ({
      ...prevData,
      end: formattedEndTime,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const task = {
      title: formData.title,
      start: formData.start,
      end: formData.end,
      priority: formData.priority,
      date: formData.date,
      category: formData.category,
    };

    if (formData.isEditing) {
      try {
        dispatch(updateUserTask({ task, id }));
        toast.success('Task updated successfully!', {
          icon: <BiTask size={24} color='#3CBC81'/>,
          style: {
            padding: '20px',
            fontSize: 18,
            boxShadow: 'none',
            border: '1px solid rgba(220, 227, 229, 0.80)'
          }
        });
        onCancel();
      } catch (error) {
        toast.error('Error occurred while updating task.', {
          icon: <BsDatabaseExclamation size={24} color="#EA3D65" />,
          style: {
            padding: '20px',
            fontSize: 18,
            boxShadow: 'none',
            border: '1px solid rgba(220, 227, 229, 0.80)'
          }
        })
      }
    } else {
      try {
        dispatch(createUserTasks(task));
        toast.success('Task created successfully!', {
          icon: <BiTask size={24} color='#3CBC81'/>,
          style: {
            padding: '20px',
            fontSize: 18,
            boxShadow: 'none',
            border: '1px solid rgba(220, 227, 229, 0.80)'
          }
        });
        onCancel();
      } catch (error) {
        toast.error('Error occurred while creating task.', {
          icon: <BsDatabaseExclamation size={24} color="#EA3D65" />,
          style: {
            padding: '20px',
            fontSize: 18,
            boxShadow: 'none',
            border: '1px solid rgba(220, 227, 229, 0.80)'
          }
        })
      }
    }
  };

  const validateForm = () => {
    const { title, start, end, priority, date, category } = formData;

    if (!title || title.length > 250) {
      toast.error('The name of the task must be between 1 and 250 characters.');
      return false;
    }

    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!start.match(timeRegex) || !end.match(timeRegex) || start >= end) {
      toast.error('Incorrect time format or start >= end.', {
        icon: <LuTimerOff size={24} color='#EA3D65' />
      });
      return false;
    }

    if (!['low', 'medium', 'high'].includes(priority)) {
      toast.error('Unspecified priority.', {
        icon: <FcHighPriority size={24} />
      });
      return false;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!date.match(dateRegex)) {
      toast.error('Incorrect date format.', {
        icon: <FaRegCalendarTimes size={24} color='#EA3D65' />
      });
      return false;
    }

    if (!['to-do', 'in-progress', 'done'].includes(category)) {
      toast.error('Incorrect category.');
      return false;
    }

    return true;
  };
  const taskId = nanoid();
  const startId = nanoid();
  const endId = nanoid();
  return (
    <TaskFormWrapper>
      {isLoading && formData.isEditing ? (
        <LoaderCont></LoaderCont>
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={taskId}>Title</label>
          <input
            placeholder="Enter text"
            type="text"
            name="title"
            id={taskId}
            value={formData.title}
            onChange={handleChange}
            required
            maxLength="250"
          />
        </div>
        <TimeDiv>
          <div>
            <label htmlFor={startId}>Start</label>
            <select
              name="start"
              value={formData.start}
              onChange={handleChange}
              id={startId}
              required
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {`${i.toString().padStart(2, '0')}:00`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={endId}>End</label>
            <select
              name="end"
              value={formData.end}
              onChange={handleChange}
              id={endId}
              required
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {`${i.toString().padStart(2, '0')}:00`}
                </option>
              ))}
            </select>
          </div>
        </TimeDiv>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
            <label>
              <input
                className="lowCheck"
                type="checkbox"
                name="priority"
                value="low"
                checked={formData.priority === 'low'}
                onChange={() =>
                  handleChange({ target: { name: 'priority', value: 'low' } })
                }
              />
              <span className="Check">Low</span>
            </label>
            <label>
              <input
                className="midCheck"
                type="checkbox"
                name="priority"
                value="medium"
                checked={formData.priority === 'medium'}
                onChange={() =>
                  handleChange({
                    target: { name: 'priority', value: 'medium' },
                  })
                }
              />
              <span className="Check">Medium</span>
            </label>
            <label>
              <input
                className="highCheck"
                type="checkbox"
                name="priority"
                value="high"
                checked={formData.priority === 'high'}
                onChange={() =>
                  handleChange({ target: { name: 'priority', value: 'high' } })
                }
              />
              <span className="Check">High</span>
            </label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '15px',
            marginTop: '10px',
          }}
        >
          <button className="addBtn" type="submit">
            {formData.isEditing ? (
              'Edit'
            ) : (
              <span className="button-content">
                <AddIcon /> Add
              </span>
            )}
          </button>
          <button className="cancelBtn" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
      )}
    </TaskFormWrapper>
  );
}

export default TaskForm;

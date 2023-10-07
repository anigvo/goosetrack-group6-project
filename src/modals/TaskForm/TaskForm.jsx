import React, { useState, useEffect } from 'react';
import { TaskFormWrapper, TimeDiv, AddIcon } from './TaskForm.styled';
import { createTask, updateTask, getTasks  } from '../../api/tasks';
import { isSameDay } from 'date-fns';

function TaskForm({ taskToEdit, onCancel, id, category }) {
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
  
  const isCurrentDay = (day) => isSameDay(day, new Date()); 


  useEffect(() => {
  
    if (!formData.date || !isCurrentDay(new Date(formData.date))) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      setFormData((prevData) => ({
        ...prevData,
        date: formattedDate,
      }));
    }
  }, [taskToEdit, formData.date]);

  useEffect(() => {
    async function fetchTaskById() {
      if (id) {
        try {
          const tasks = await getTasks('month', formData.date);
          const taskToPopulate = tasks.find((task) => task._id === id);
  
          if (taskToPopulate) {
            console.log(taskToPopulate);
  
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
          console.error('Error fetching task by id:', error);
        }
      }
    }
  
    fetchTaskById();
  }, [id, formData.date]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'end' && value < formData.start) {
      alert('Час "end" не може бути менше за час "start"');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'start') {
      updateEndTime(value);
    }
  };

  const updateEndTime = (selectedStartTime) => {
    const [startHour, startMinute] = selectedStartTime.split(':').map(Number);

    let endHour = startHour + 1;
    if (endHour > 23) {
      endHour = 23;
    }

    const formattedEndTime = `${endHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;

    setFormData((prevData) => ({
      ...prevData,
      end: formattedEndTime,
    }));
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const taskData = {
      title: formData.title,
      start: formData.start,
      end: formData.end,
      priority: formData.priority,
      date: formData.date,
      category: formData.category,
    };

    console.log(taskData)

    if (formData.isEditing) {
      try {
        await updateTask(taskData, id);
        onCancel();
      } catch (error) {
        console.error('Error updating task:', error);
      }
    } else {
      try {
        await createTask(taskData); 
        onCancel();
      } catch (error) {
        console.error('Error creating task:', error);
      }
    }
  };

  
  const validateForm = () => {
    const { title, start, end, priority, date, category } = formData;

    if (!title || title.length > 250) {
      alert('Назва завдання має бути від 1 до 250 символів');
      return false;
    }

    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!start.match(timeRegex) || !end.match(timeRegex) || start >= end) {
      alert('Некоректний формат часу або початок більше або рівний кінцю');
      return false;
    }

    if (!['low', 'medium', 'high'].includes(priority)) {
      alert('Некоректний пріоритет');
      return false;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!date.match(dateRegex)) {
      alert('Некоректний формат дати');
      return false;
    }

    if (!['to-do', 'in-progress', 'done'].includes(category)) {
      alert('Некоректна категорія');
      return false;
    }

    return true;
  };

  return (
    <TaskFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            placeholder="Enter text"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            maxLength="250"
          />
        </div>
        <TimeDiv>
          <div>
            <label>Start</label>
            <select name="start" value={formData.start} onChange={handleChange} required>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {`${i.toString().padStart(2, '0')}:00`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>End</label>
            <select name="end" value={formData.end} onChange={handleChange} required>
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
                onChange={() => handleChange({ target: { name: 'priority', value: 'low' } })}
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
                onChange={() => handleChange({ target: { name: 'priority', value: 'medium' } })}
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
                onChange={() => handleChange({ target: { name: 'priority', value: 'high' } })}
              />
              <span className="Check">High</span>
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', marginTop: '10px' }}>
          <button className="addBtn" type="submit">
            {formData.isEditing ? 'Edit' : <span className="button-content"><AddIcon /> Add</span>}
          </button>
          <button className="cancelBtn" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </TaskFormWrapper>
  );
}

export default TaskForm;
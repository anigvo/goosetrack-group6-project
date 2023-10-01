import React, { useState, useEffect } from 'react';
import { TaskFormWrapper, TimeDiv } from './TaskForm.styled';

function TaskForm({ taskToEdit, closeModal }) {
  const [formData, setFormData] = useState({
    title: '',
    start: '09:00',
    end: '14:00',
    priority: [],
    date: '',
    category: 'to-do',
    isEditing: false,
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
  }, [taskToEdit]);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { title, start, end, priority, date, category } = formData;

    if (formData.isEditing) {
    } else {
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

  const togglePriority = (value) => {
    const { priority } = formData;

    if (priority.includes(value)) {
      setFormData((prevData) => ({
        ...prevData,
        priority: prevData.priority.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        priority: [...prevData.priority, value],
      }));
    }
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
            {formData.isEditing ? 'Edit' : '+ Add'}
          </button>
          <button className="cancelBtn" type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </TaskFormWrapper>
  );
}

export default TaskForm;

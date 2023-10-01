import React, { Component } from 'react';
import { TaskFormWrapper, TimeDiv } from "./TaskForm.styled";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      start: '09:00', 
      end: '14:00', 
      priority: [],
      date: '',
      category: 'to-do',
      isEditing: false,
    };
  }

  componentDidMount() {
    if (this.props.taskToEdit) {
      const { title, start, end, priority, date, category } = this.props.taskToEdit;
      this.setState({
        title,
        start,
        end,
        priority,
        date,
        category,
        isEditing: true,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'end' && value < this.state.start) {
      alert('Час "end" не може бути менше за час "start"');
      return;
    }
  
    this.setState({ [name]: value });
  
    if (name === 'start') {
      this.updateEndTime(value);
    }
  };

  updateEndTime = (selectedStartTime) => {
    const [startHour, startMinute] = selectedStartTime.split(':').map(Number);
    
    let endHour = startHour + 1;
    if (endHour > 23) {
      endHour = 23; 
    }
    
    const formattedEndTime = `${endHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
    
    this.setState({ end: formattedEndTime });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    // const { title, start, end, priority, date, category } = this.state;

    if (this.state.isEditing) {

    } else {

    }
  };

  validateForm() {
    const { title, start, end, priority, date, category } = this.state;

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
  }

  togglePriority = (value) => {
    const { priority } = this.state;

    if (priority.includes(value)) {
      this.setState({
        priority: priority.filter((item) => item !== value),
      });
    } else {
      this.setState({
        priority: [...priority, value],
      });
    }
  };

  render() {
    return (
      <TaskFormWrapper>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              placeholder="Enter text"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
              maxLength="250"
            />
          </div>
          <TimeDiv>
            <div>
              <label>Start</label>
              <select
                name="start"
                value={this.state.start}
                onChange={this.handleChange}
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
              <label>End</label>
              <select
                name="end"
                value={this.state.end}
                onChange={this.handleChange}
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
            <div style = {{display: 'flex', alignItems: 'center', gap: '17px' }}>
              <label>
                <input className='lowCheck'
                  type="checkbox"
                  name="priority"
                  value="low"
                  checked={this.state.priority === 'low'}
                  onChange={() => this.setState({ priority: 'low' })}
                  style = {{backgroundColor: '#72C2F8' }}
                />
                <span className='Check'>Low</span>
              </label>
              <label>
                <input className='midCheck'
                  type="checkbox"
                  name="priority"
                  value="medium"
                  checked={this.state.priority === 'medium'}
                  onChange={() => this.setState({ priority: 'medium' })}
                />
                <span className='Check'>Medium</span>
              </label>
              <label>
                <input className='highCheck'
                  type="checkbox"
                  name="priority"
                  value="high"
                  checked={this.state.priority === 'high'}
                  onChange={() => this.setState({ priority: 'high' })}
                />
                <span className='Check'>High</span>
              </label>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', marginTop: '10px' }}>
            <button className='addBtn' type="submit">{this.state.isEditing ? 'Edit' : '+ Add'}</button>
            <button style={{ backgroundColor: '#E5EDFA', color: '#343434'}} type="button" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
      </TaskFormWrapper>
    );
  }
}

export default TaskForm;
 
import React, { Component, createRef } from "react";
import "./TaskList.css";

class TaskList extends Component {
  tasks = [
    {
      id: 101,
      text: "Скинуть дз 5,6,7"
    },
    {
      id: 102,
      text: "Встать в 9 утра на урок"
    },
    {
      id: 103,
      text: "послушать"
    },
    {
      id: 104,
      text: "Покушать"
    }
  ];

 
  inputRef = createRef();

  addTask = () => {
    const value = this.inputRef.current.value.trim();

    if (value === "") return;

    const newTask = {
      id: Date.now(),
      text: value
    };

    this.tasks.push(newTask);

  
    this.inputRef.current.value = "";


    this.forceUpdate();
  };



  deleteTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    this.forceUpdate();
  };

  render() {
    return (
      <div className="task-container">
        <h1 className="title">Список заданий на завтра</h1>

  
        <div className="add-task">
          <input
            type="text"
            placeholder="Нове завдання..."
            ref={this.inputRef}
            className="task-input"
          />

          <button className="add-btn" onClick={this.addTask}>
            Додати
          </button>
        </div>

        {this.tasks.length === 0 ? (
          <p className="empty">Список завдань порожній</p>
        ) : (
          <ul className="task-list">
            {this.tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>

                <button
                  className="delete-btn"
                  onClick={() => this.deleteTask(task.id)}
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TaskList;
import React, { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  tasks = [
    {
      id: 101,
      text: "Створити адаптивний header для сайту"
    },
    {
      id: 102,
      text: "Оптимізувати зображення для швидкого завантаження"
    },
    {
      id: 103,
      text: "Додати темну тему для інтерфейсу"
    },
    {
      id: 104,
      text: "Підключити анімацію для кнопок"
    }
  ];

  deleteTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    // Оновлення компонента без state
    this.forceUpdate();
  };

  render() {
    return (
      <div className="task-container">
        <h1 className="title">Frontend Task Board</h1>

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
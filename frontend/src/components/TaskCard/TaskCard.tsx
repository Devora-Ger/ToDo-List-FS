import React from 'react';
import { Task } from '../ToDoTaskList/TodoTasksList';

export const TaskCard: React.FC<Task> = (task) => {
    return (
        <div>{task.taskName}</div>
    );
}
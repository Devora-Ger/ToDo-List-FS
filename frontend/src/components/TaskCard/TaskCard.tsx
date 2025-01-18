import React from 'react';
import { Task } from '../ToDoTaskList/TodoTasksList';
import configData from '../../config.json';
import './TaskCard.css'

interface TaskCardProps {
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
    task: Task,
}
export const TaskCard: React.FC<TaskCardProps> = ({onDelete, onUpdate, task}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const massageToPrint = configData.massageToPrintCard;

    const showOrHideMoreData = () => {
        setIsOpen((open)=>!open);
    }

    return (
        <div className="card">
            <button onClick={showOrHideMoreData}>{task.taskName}</button>
            <button onClick={()=>onDelete(task.taskId)}>X</button>
            <button onClick={()=>onUpdate(task.taskId)}>U</button>
            <div className="container">
             <p>{isOpen && massageToPrint.timeForecast}{isOpen && task.timeForecast}</p>
             <p>{isOpen && massageToPrint.urgency}{isOpen && task.urgency}</p>
            </div>
        </div>
    );
}
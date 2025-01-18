import React from 'react';
import { Task } from '../ToDoTaskList/TodoTasksList';
import configData from '../../config.json';

export const TaskCard: React.FC<Task> = (task) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const massageToPrint = configData.massageToPrintCard;

    const showOrHideMoreData = () => {
        setIsOpen((open)=>!open);
    }

    return (
        <>
        <div className="card">
            <button onClick={showOrHideMoreData}>{task.taskName}</button>
            <div className="container">
             <p>{isOpen && massageToPrint.timeForecast}{isOpen && task.timeForecast}</p>
             <p>{isOpen && massageToPrint.urgency}{isOpen && task.urgency}</p>
             
            </div>
        </div>
        </>
        
    );
}
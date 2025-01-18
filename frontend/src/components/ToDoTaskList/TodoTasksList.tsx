import React from 'react';
import {api} from '../../api';
import configData from '../../config.json';
import {isValidTaskArray} from '../../services/ValidationResponse'
import { TaskCard } from '../TaskCard/TaskCard';
export interface Task {
    taskName: string,
    timeForecast: string,
    urgency: number,
    taskId: string
}

export const TodoTasksList: React.FC = () => {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    React.useEffect(()=>{
        getAllTasks();

        return (()=>{
            //setTasks([]);
        });
    }, [tasks]);

    const getAllTasks = async () => {
        const response = await api.get(configData.serverURL+'tasks/'); 
        if(isValidTaskArray(response.data)) {
            setTasks(response.data);
        }
    } 

    return(
        <div>
            <h1>ToDo list</h1>
            <ul>
            {tasks.map((task)=>{
                return(<li key={task.taskId}>
                        <TaskCard {...task} />
                       </li>);
            })}
            </ul>
        </div>
        
    );
}
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
           
        });
    }, [tasks]);

    const getAllTasks = async () => {
        const response = await api.get(configData.serverURL+'tasks/'); 
        if(isValidTaskArray(response.data)) {
            setTasks(response.data);
        }
    } 

    const deleteItem = React.useCallback(async (id: string) => {
        const response = await api.delete(configData.serverURL+`tasks/${id}`);
        if(response.data) {
            setTasks((tasks) => tasks.filter((task) => task.taskId !== id));
        }
    },[]);

    const updateItem = React.useCallback(async (id: string) => {
        const task: Task[] = tasks.filter((task)=>(task.taskId===id));
        if(task.length===1) {
            const response = await api.patch(configData.serverURL+`tasks/${id}`, task);
            if(response.data) { ///
                tasks.push(task[0]);
            }
        }
        
        },[]);

    return(
        <div>
            <h1>ToDo list</h1>
            <ul>
            {tasks.map((_task)=>{
                return(<li key={_task.taskId}>
                        <TaskCard onDelete={deleteItem} onUpdate={updateItem} task={_task} />
                       </li>);
            })}
            </ul>
        </div>
        
    );
}
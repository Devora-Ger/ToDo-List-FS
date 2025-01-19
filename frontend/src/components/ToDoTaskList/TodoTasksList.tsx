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

    const updateItem = React.useCallback(async (newTask: Task) => {
        const index = tasks.findIndex((task)=>task.taskId===newTask.taskId);
        alert(`${newTask}`)
        if(index < tasks.length && index >= 0) {
            //const response = await api.patch("localhost:5000//tasks/8ea18537-9606-4c2a-a023-9e15e81d8490", newTask);
            const response = await api.patch(configData.serverURL+`tasks//${newTask.taskId}`, newTask);
            if(response.data) { ///
                const index = tasks.findIndex((task)=>task.taskId===newTask.taskId);
                tasks[index] = newTask;
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
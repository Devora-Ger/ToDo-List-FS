import React from 'react';
import { Task } from '../ToDoTaskList/TodoTasksList';
import configData from '../../config.json';
import './TaskCard.css'
import { TypeInput } from '../TypeInput/TypeInput';

interface TaskCardProps {
    onDelete: (id: string) => void;
    onUpdate: (task: Task) => void;
    task: Task,
}
export const TaskCard: React.FC<TaskCardProps> = ({onDelete, onUpdate, task}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isUpdateMOde, setUpdateMode] = React.useState<boolean>(false);
    
    const [formData, setFormData] = React.useState<Task>({
        taskName: "",
        timeForecast: "",
        urgency: 0,
        taskId: task.taskId
    });

    // React.useEffect(()=>{
    //     if(isOpen){
    //         createTaskToUpdate();

    //     }
    //         return (()=>{
               
    //         });
    // }, [formData]);

    const massageToPrint = configData.massageToPrintCard;

    const showOrHideMoreData = () => {
        setIsOpen((open)=>!open);
    }

    const showUpdateForm = () => {
        setUpdateMode(()=> !isUpdateMOde);
    }

    const createTaskToUpdate =() => {
        if(formData.taskName) {
            task.taskName =  formData.taskName;
        }

        if(formData.timeForecast) {
            task.timeForecast =  formData.timeForecast;
        }

        if(formData.urgency) {
            task.urgency =  formData.urgency;
        }
        alert(`${formData.taskName}`)
        onUpdate(task);
        // setFormData({
        //     taskName: "",
        //     timeForecast: "",
        //     urgency: 0,
        //     taskId: ""
        // });
        
    }

    const handleTaskNameForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormData({...formData, [formData.taskName]: e.target.value});
    }

    const handleTimeForecastForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormData({...formData, [formData.timeForecast]: e.target.valueAsDate});
    }

    const handleUrgencyForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormData({...formData, [formData.urgency]: e.target.valueAsNumber});
    }

    

    return (
        <div className="card">
            <button onClick={showOrHideMoreData}>{task.taskName}</button>
            <button onClick={()=>onDelete(task.taskId)}>X</button>
            <button onClick={showUpdateForm}>U</button>
            <div className="container">
                <p>{isOpen && massageToPrint.timeForecast}{isOpen && task.timeForecast}</p>
                <p>{isOpen && massageToPrint.urgency}{isOpen && task.urgency}</p>
                {isUpdateMOde &&<form onSubmit={createTaskToUpdate}>
                    <label>{massageToPrint.TaskName}</label>
                    <br></br>
                    <TypeInput onChange={handleTaskNameForm} type={'text'} />
                    <br></br>
                    <label>{massageToPrint.timeForecast}</label>
                    <br></br>
                    <TypeInput onChange={handleTimeForecastForm} type={'time'} />
                    <br></br>
                    <label>{massageToPrint.urgency}</label>
                    <br></br>
                    <TypeInput onChange={handleUrgencyForm} type={'number'} />
                    <TypeInput onChange={createTaskToUpdate} type={'submit'} />
                </form>}
            </div>
        </div>
    );
}
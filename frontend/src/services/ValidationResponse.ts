import { Task } from '../components/ToDoTaskList/TodoTasksList';

export const isValidTaskArray = (data: Task) => {
    const TaskArray: Task[] = [];
    return (typeof(data) === typeof(TaskArray));
}
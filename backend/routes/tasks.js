import express from 'express';
import {v4 as uuid} from 'uuid';

const router = express.Router();

let tasks = [
    {
        taskName: 'Clean the kitchen',
        timeForecast: '02:00',
        urgency: '3',
        taskId: uuid()
    },

    {
        taskName: 'Clean the toilet',
        timeForecast: '00:20',
        urgency: '1',
        taskId: uuid()
    },

    {
        taskName: 'Do HomeWork',
        timeForecast: '00:45',
        urgency: '4',
        taskId: uuid()
    },

    {
        taskName: 'Take the Dog for a walk',
        timeForecast: '00:20',
        urgency: '5',
        taskId: uuid()
    },
]

router.get('/', (req, res)=>{
    res.send(tasks);
});

router.post('/', (req, res) => {
    const task = req.body;
    tasks.push({ ...task, id: uuid() });
    res.send(`${task.taskName} has been added to the Database`);
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    const task = tasks.filter((t)=>(t.taskId === id))
    res.send(task);
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    if(tasks.find((t)=>(t.taskId === id))) {
        tasks = tasks.filter((t)=>(t.taskId !== id))
        res.send(`The task ${id} deleted successfully from database`);
    } else {
        res.send(`The task ${id} dont exist in the database`);
    }
    
});


export default router;

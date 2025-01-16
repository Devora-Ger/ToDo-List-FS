import express from 'express';
import {v4 as uuid} from 'uuid';

const router = express.Router();

const tasks = [
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

export default router;

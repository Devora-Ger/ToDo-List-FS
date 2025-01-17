import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks.js';
import cors from 'cors';

const app = express();
const port = 5000;
const corsi = cors();

app.use(bodyParser.json());
app.use(corsi);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
});

app.listen(port, ()=>console.log(`Server running on port: http://localhost:${port}`));
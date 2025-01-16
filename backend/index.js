import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
});

app.listen(port, ()=>console.log(`Server running on port: http://localhost:${port}`));
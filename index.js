import express from 'express';
import postAttendance from './routes/postAttendance.js';
import getEmp from './routes/getEmp.js';

const app = express();
app.use(express.json());
const port = 3000;

app.use('/postattendance', postAttendance);
app.use('/getemp', getEmp);

app.get('/', (req, res) => {
	res.json({ message: 'Hello Keen Devs.'})
});  

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});


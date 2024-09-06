import express from 'express';
import postAttendance from './routes/postAttendance.js';

const app = express();
app.use(express.json());
const port = 3000;

app.use('/postattendance', postAttendance);

app.get('/', (req, res) => {
	res.json({ message: 'Hello Keen Devs.'})
});  

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});


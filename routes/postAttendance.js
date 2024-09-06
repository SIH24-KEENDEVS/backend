import express from 'express';
import connectDb from '../config/db.js';
import Emp from '../models/empSchema.js';
const router = express.Router();

router.patch('/:id', async (req, res) => { //send request to http://localhost:3000/postattendance/1234567890
    const id = req.params.id;
    const attendance = req.body.emp_attendance;
    try {
        await connectDb(); 
        const emp = await Emp.find({ emp_id : id });
        if (!emp) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        await Emp.updateOne({
            emp_id: id
        },
        {
            $push: {
                emp_attendance: attendance
            }
        })
        res.status(201).json(emp);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

export default router;
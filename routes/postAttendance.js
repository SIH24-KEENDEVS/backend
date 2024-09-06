import express from 'express';
import connectDb from '../config/db.js';
import Emp from '../models/empSchema.js';
import bcrypt from 'bcrypt';
const router = express.Router();

router.patch('/:id', async (req, res) => { //send request to http://localhost:3000/postattendance/1234567890
    const id = req.params.id;
    const { date, time_in, time_out, lat, lon } = req.body;
    let latHash = ""
    try {
        await connectDb(); 
        const emp = await Emp.find({ emp_id : id });
        if (!emp) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        bcrypt.hash(lat, 10, function(err, hash) {
            latHash = hash;
        });
        bcrypt.hash(lon, 10, async function(err, hash) {
            const attendance = {
                date,
                time_in,
                time_out,
                lat: latHash,
                lon: hash
            }
            await Emp.updateOne({
                emp_id: id
            },
            {
                $push: {
                    emp_attendance: attendance
                }
            })
        })
        res.status(201).json({msg: 'Attendance added successfully'});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

export default router;
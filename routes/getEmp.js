import express from 'express'
import connectDB from '../config/db.js'
import Emp from '../models/empSchema.js'
const router = express.Router()

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await connectDB()
        const emp = await Emp.find({ emp_id : id })
        if (!emp) {
            return res.status(404).json({ msg: 'Employee not found' })
        }
        res.status(200).json(emp)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

export default router
import mongoose from 'mongoose';  

const attendanceSchema = new mongoose.Schema({
    emp_name: {
        type: String,
        required: true
    },
    emp_id: {
        type: String,
        required: true
    },
    emp_department: {
        type: String,
        required: true
    },
    emp_attendance: [{
        date: {
            type: String,
            required: true
        },
        time_in: {
            type: String,
            required: true
        },
        time_out: {
            type: String,
            required: true
        }, 
        lat: {
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        }
    }]
});

const Emp = mongoose.models.Emp || mongoose.model('Emp', attendanceSchema);
export default Emp;
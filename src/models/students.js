const mongoose = require("mongoose");
const validator = require("validator");

//Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "E-mail id already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid E-mail Type");
            }
        }
    },

    phone: {
        type: Number,
        minlength: 10,
        unique: true
    },

    address: {
        type: String,
        required: true
    }
});

//Model Create Collections
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
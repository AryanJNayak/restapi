const express = require("express");
const router = express.Router();
const Students = require("../models/students")


//Create A New Students using Async/Await
router.post("/students", async (req, res) => {

    try {

        const user = new Students(req.body);

        const createUser = await user.save();

        res.status(201).send(createUser);

    } catch (error) {

        res.status(400).send(error);

    }

});



//read full data
router.get("/students", async (req, res) => {

    try {

        const studentsData = await Students.find();

        res.send(studentsData);

    } catch (error) {

        res.status(400).send(error);

    }
})

//read individial data bt id
router.get("/students/:id", async (req, res) => {

    try {

        const _id = req.params.id;

        //**** const studensData = await Students.find({_id});
        const studentData = await Students.findById({ _id });

        res.send(studentData);

    } catch (error) {

        res.status(500).send(error);

    }
})



//update data id
router.patch("/students/:id", async (req, res) => {

    try {

        const _id = req.params.id;

        const updateStudent = await Students.findByIdAndUpdate({ _id }, req.body, { new: true });

        res.status(200).send(updateStudent);

    } catch (error) {

        res.status(404).send(error);

    }
})



//delete data
router.delete("/students/:id", async (req, res) => {

    try {

        const _id = req.params.id;

        const deleteStudent = await Students.findByIdAndDelete({ _id });

        if (!_id) {
            return res.status(404).send();
        }

        res.send(deleteStudent);

    } catch (error) {

        res.status(404).send(error);

    }
})

module.exports = router;
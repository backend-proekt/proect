const {Student} = require('../models/models')
const ApiError = require('../error/ApiError')

class StudentController
{
    async create(req, res, next) 
    {
        try{
            const {fio, date, parents_fio, phone_number, email, groupId, directionId} = req.body
            const student = await Student.create({fio, date, parents_fio, phone_number, email, groupId, directionId})
            return res.json(student)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) 
    {
        const students = await Student.findAll()
        return res.json(students)
    }

    async delete(req, res) 
    {

    }
}

module.exports = new StudentController()
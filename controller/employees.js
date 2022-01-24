const employee = require('../models/index').employees;
module.exports = {

    async getAllEmployee(req, res) {
        try {
            const employeeCollection = await employee.findAll({ include: 'companies' })
            res.status(201).send(employeeCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async create(req, res) {
        try {
            const employeeCollection = await employee.create({
                name: req.body.name,
                department: req.body.department,
                hometown: req.body.hometown,
                experience: req.body.experience,

                jobtitle: req.body.jobtitle,
                company_id: req.body.company_id,
                // Company_Name: req.body.Company_Name


            })
            res.status(201).send(employeeCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    async update(req, res) {
        try {
            const employeeCollection = await employee.findOne(
                {
                    where: { id: req.params.id, }
                })
            if (employeeCollection) {
                const updateCompany = await employee.update(
                    {
                        name: req.body.name,
                        department: req.body.department,
                        hometown: req.body.hometown,
                        experience: req.body.experience,

                        jobtitle: req.body.jobtitle,
                        company_id: req.body.company_id,
                    },
                    {
                        where: { id: req.params.id },

                    })
                res.status(201).send(updateCompany)
            } else {
                res.status(404).send("User Not Found")
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },


    async delete(req, res) {
        try {
            const deletethis = await employee.destroy(
                {
                    where: { id: req.params.id }
                })
            res.status(201).send({ success: true })


        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },

    pagingEmployee: async function (req, res) {
        try {
            const employeeCollection = await employee.findAndCountAll({ include: 'companies' })
            res.status(201).send(employeeCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    pagingModifiedEmployee: async function (req, res) {
        try {
            const employeeCollection = await employee.findAndCountAll({
                include: 'companies',
                limit: 5,
                offset: 6
            })
            res.status(201).send(employeeCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },


    pagelikeWebsite: async function (req, res) {
        try {
            const { pageNo, sizePerPage } = req.query
            const allEmployee = await employee.findAndCountAll({
                include: 'companies',
                limit: sizePerPage,
                offset: pageNo * sizePerPage


            })
            res.status(201).send(allEmployee)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },








}
const attendence = require('../models/index').attendences;
module.exports = {

    // async getAllattendence(req, res) {
    //     try {
    //         const attendenceCollection = await attendence.findAll({ include: ['companies', 'employees'] })

    //         res.status(201).send(attendenceCollection)
    //     } catch (e) {
    //         console.log(e)
    //         res.status(500).send(e)
    //     }
    // }
    async getAllattendence(req, res) {
        try {
            const attendenceCollection = await attendence.findAll({ include: ['companies', 'employees'] })
            const response = [];
            attendenceCollection.forEach(element => {
                const obj = {
                    sl: element.sl,
                    date: element.date,
                    emp_id: element.emp_id,
                    com_id: element.com_id,
                    attendence: element.attendence,
                    company_name: element.companies.name,
                    employee_name: element.employees.name
                }
                response.push(obj);
            })

            res.status(201).send(response)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }

    ,
    async create(req, res) {
        try {
            const attendenceCollection = await attendence.create({
                date: req.body.date,
                emp_id: req.body.emp_id,
                com_id: req.body.com_id,
                attendence: req.body.attendence



            })
            res.status(201).send(attendenceCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    async update(req, res) {
        try {
            const attendenceCollection = await attendence.findOne(
                {
                    where: { sl: req.params.sl, }
                })
            if (attendenceCollection) {
                const updateCompany = await attendence.update(
                    {
                        date: req.body.date,
                        emp_id: req.body.emp_id,
                        com_id: req.body.com_id,
                        attendence: req.body.attendence
                    },
                    {
                        where: { sl: req.params.sl },

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
            const deletethis = await attendence.destroy(
                {
                    where: { sl: req.params.sl }
                })
            res.status(201).send({ success: true })


        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },


}
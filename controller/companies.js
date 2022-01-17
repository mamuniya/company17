const company = require('../models/index').companies;
module.exports = {
    async getAllCompanies(req, res) {
        try {
            const companyCollection = await company.findAll({})
            res.status(201).send(companyCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async create(req, res) {
        try {
            const companyCollection = await company.create({
                name: req.body.name,
                type: req.body.type,
                location: req.body.location,
                total_employee: req.body.total_employee,
                reviews: req.body.reviews
            })
            res.status(201).send(companyCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    async update(req, res) {
        try {
            const companyCollection = await company.findOne(
                {
                    where: { id: req.params.id, }
                })
            if (companyCollection) {
                const updateCompany = await company.update(
                    {
                        name: req.body.name,
                        type: req.body.type,
                        location: req.body.location,
                        total_employee: req.body.total_employee,
                        reviews: req.body.reviews,
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
            const deletethis = await company.destroy(
                {
                    where: { id: req.params.id }
                })
            res.status(201).send({ success: true })


        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },


}
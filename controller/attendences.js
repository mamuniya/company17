const attendence = require('../models/index').attendences;
const { Op } = require("sequelize");
module.exports = {

    getAllattendence: async function (req, res) {
        try {
            const attendenceCollection = await attendence.findAll({ include: ['companies', 'employees'] })

            res.status(201).send(attendenceCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    modifiedAttendence: async function (req, res) {
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
            const uniqueEmpIdArr = [... new Set(response.map(item => item.emp_id))]
            let finalData = [];
            uniqueEmpIdArr.forEach(empId => {
                var sortedUniqueEmpidArr = response.filter(function (element) {
                    if (element.emp_id == empId) {
                        return true
                    }
                })
                let present = 0;
                let absent = 0;
                sortedUniqueEmpidArr.forEach(element1 => {
                    if (element1.attendence == "yes") {
                        present++;
                    }
                    else { absent++ }
                })
                const objFile = {
                    emp_id: empId,
                    emp_name: sortedUniqueEmpidArr[0].employee_name,
                    company_name: sortedUniqueEmpidArr[0].company_name,
                    present_day: present,
                    absent_day: absent
                }
                finalData.push(objFile)
                // console.log(sortedUniqueEmpidArr);
            })


            res.status(201).send(finalData)
        } catch (e) {
            console.log(e);
            res.status(500).send(e)
        }

    },
    async getAllattendenceReport(req, res) {
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


    oneEmployeeData: async function (req, res) {
        try {
            const oneAttendance = await attendence.findAll({
                where: { emp_id: req.query.emp_id }
            })
            let present = 0;
            let absent = 0;
            oneAttendance.forEach(element => {
                if (element.attendence == "yes") {
                    present++;
                }
                else if (element.attendence == "no") {
                    absent++;
                }

            })
            const finalOutput = {
                Emp_id: req.query.emp_id,
                Total_Present: present,
                Total_absent: absent,
                Total_working_days: Number(present + absent)
            }



            res.status(201).send(finalOutput)



        } catch (e) {
            console.log(e);
            res.status(500).send(e)
        }
    },
    oneEmpDateData: async function (req, res) {
        try {
            const oneAttendance = await attendence.findAll({
                where: {
                    emp_id: req.query.emp_id,
                    date: { [Op.between]: ['2021-12-01', '2021-12-31'] }
                }

            })
            let present = 0;
            let absent = 0;
            oneAttendance.forEach(element => {
                if (element.attendence == "yes") {
                    present++;
                }
                else if (element.attendence == "no") {
                    absent++;
                }

            })
            const finalOutput = {
                Emp_id: req.query.emp_id,
                Total_Present: present,
                Total_absent: absent,
                Total_working_days: Number(present + absent)
            }
            res.status(201).send(finalOutput)

        } catch (e) {
            console.log(e);
            res.status(500).send(e)
        }
    },

    oneMonthData: async function (req, res) {
        try {
            const oneAttendance = await attendence.findAll({
                where: {
                    emp_id: req.query.emp_id,
                    date: { [Op.between]: [req.query.from, req.query.to] }
                }

            })
            let present = 0;
            let absent = 0;
            oneAttendance.forEach(element => {
                if (element.attendence == "yes") {
                    present++;
                }
                else if (element.attendence == "no") {
                    absent++;
                }

            })
            const finalOutput = {
                Emp_id: req.query.emp_id,
                Total_Present: present,
                Total_absent: absent,
                Total_working_days: Number(present + absent)
            }
            res.status(201).send(finalOutput)

        } catch (e) {
            console.log(e);
            res.status(500).send(e)
        }
    },

}
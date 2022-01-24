const company = require("../controller").companies
const employee = require("../controller").employees
const attendence = require("../controller").attendences

module.exports = app => {
    app.get("/api", (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1",
        })
    })

    app.post("/c/create", company.create)
    app.patch("/c/update/:id", company.update)
    app.delete("/c/delete/:id", company.delete)
    app.get("/c/all", company.getAllCompanies)




    app.post("/employee/create", employee.create)
    app.patch("/employee/update/:id", employee.update)
    app.delete("/employee/delete/:id", employee.delete)
    app.get("/employee/all", employee.getAllEmployee)
    app.get("/employee/page", employee.pagingEmployee)
    app.get("/employee/pm", employee.pagingModifiedEmployee)
    app.get("/employee/realpage", employee.pagelikeWebsite)


    app.post("/attendence/create", attendence.create)
    app.patch("/attendence/update/:sl", attendence.update)
    app.delete("/attendence/delete/:sl", attendence.delete)
    app.get("/attendence/all", attendence.getAllattendence)
    app.get("/attendence/alldetail", attendence.getAllattendenceReport)
    app.get("/attendence/modified", attendence.modifiedAttendence)


    app.get("/attendence/one", attendence.oneEmployeeData)
    app.get("/attendence/monthwise", attendence.oneEmpDateData)
    app.get("/attendence/onemonth", attendence.oneMonthData)


    // app.get("/attendence/pagingCall", attendence.pagingCall)
    // app.get("/attendence/paging", attendence.pagingModified)

}

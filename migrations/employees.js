module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable("employees", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            department: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            hometown: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            experience: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            jobtitle: {
                type: Sequelize.STRING,
                allowNull: false,
            },


            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,

            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("employees"),
}
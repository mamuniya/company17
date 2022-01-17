module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable("attendences", {
            sl: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            emp_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'employees',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            com_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'companies',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },

            attendence: {
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("attendences"),
}
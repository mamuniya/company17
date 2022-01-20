module.exports = (sequelize, DataTypes) => {
    let attendences = sequelize.define("attendences", {
        sl: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        emp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        com_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attendence: {
            type: DataTypes.STRING,
        },
        total_days: {
            type: DataTypes.INTEGER
        },
        present_days: {
            type: DataTypes.INTEGER
        }





    })
    attendences.associate = function (models) {
        attendences.belongsTo(models.companies, { foreignKey: 'com_id', as: 'companies' },)
        attendences.belongsTo(models.employees, { foreignKey: 'emp_id', as: 'employees' },);

    };
    // attendences.associate = function (models) {
    //     attendences.belongsTo(models.employees, { foreignKey: 'emp_id', as: 'employees' },)

    // };

    return attendences;
}
module.exports = (sequelize, DataTypes) => {
    let employees = sequelize.define("employees", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        hometown: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        ,
        jobtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },




    })
    employees.associate = function (models) {
        employees.belongsTo(models.companies, { foreignKey: 'company_id', as: 'companies' },)

    };

    return employees;
}
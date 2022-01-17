module.exports = (sequelize, DataTypes) => {
    let companies = sequelize.define("companies", {
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_employee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    })
    return companies;
}
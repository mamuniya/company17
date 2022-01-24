module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('attendences', 'total_days', {

                }, { transaction: t }),
                queryInterface.removeColumn('attendences', 'present_days', {

                }, { transaction: t })
            ])
        })
    }
}
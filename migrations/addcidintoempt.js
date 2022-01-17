module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'employees', // name of Source model
            'company_id', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'companies', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'employees', // name of Source model
            'company_id' // key we want to remove
        );
    }
};
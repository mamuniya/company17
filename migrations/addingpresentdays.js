module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'attendences', // name of Source model
            'present_days', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,

                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'attendences', // name of Source model
            'present_days' // key we want to remove
        );
    }
};
module.exports = (sequelize, DataTypes) => {
    const Trails = sequelize.define('trails', {
        trailname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        length: {
            type: DataTypes.STRING,
            allowNull: true
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Trails;
}
module.exports = (sequelize, DataTypes) => {
    const OpenTrails = sequelize.define('opentrails', {
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
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return OpenTrails;
}
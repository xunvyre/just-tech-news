//import from sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//define table columns and confirguration
User.init
(
    {
        //define id column
        id:
        {
            //use sqlz DataTypes object to provide the type of data
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //define username column
        username:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define email column
        email:
        {
            type: DataTypes.STRING,
            allowNull: false,
            //no duplicate values in table
            unique: true,
            //if allowNull === false, you can fun data through validators here
            validate:
            {
                isEmail: true
            }
        },
        //define password column
        password:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                //password must be at least 4 characters
                len: [4]
            }
        }
    },
    {
        //table config options
        //pass in imported sequelize connection
        sequelize,
        //dont autiomatically create timestamp fields
        timestamps: false,
        //dont pluralize name of database table
        freezeTableName: true,
        //make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;
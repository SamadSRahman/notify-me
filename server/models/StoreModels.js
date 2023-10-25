// userModel.js
import { DataTypes } from 'sequelize'
import sequelize  from '../config/database.js'

const StoreModel = sequelize.define('Active_Stores', {
    shop : { // Shop Name of User
    type: DataTypes.TEXT,
    allowNull:false,
    unique:true
  },
  isActive: { // Check Shop Install Currently or Unistall
    type: DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:false
  },
});

export default StoreModel;

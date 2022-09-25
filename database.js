var mysql=require('mysql');
var con =mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"project"
    }
);
module.exports = con; 
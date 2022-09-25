var mysql=require('mysql');
var con =mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"yash@123",
        database:"project"
    }
);
module.exports = con; 
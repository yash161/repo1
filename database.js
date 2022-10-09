var mysql=require('mysql');
var con =mysql.createPool(
{
    host: "terraform-20221009075734828000000001.cwq1rj9hzdnj.us-east-1.rds.amazonaws.com",
    user: "yash",
    password: "yashshah"
});
module.exports = con; 
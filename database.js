var mysql=require('mysql');
var con =mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"project"
    }
);
// con.connect(function(error){
//     if(!!error){
//       console.log(error);
//     }else{
//       console.log('Connected!:)');
//     }
//   });  
module.exports = con; 
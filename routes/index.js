// router.get('/details/:id', function(req, res){
//     connection.query("SELECT * FROM projects WHERE id = ?", req.params.id, function(err){
//         if(err) throw err;
//         req.render('details', {
//             "project": rows[0]
//         })
//     })
// })


// var connection = mysql.createConnection({
//     //set host as localhost
//     host: 'localhost',
//     // the user is root
//     user: 'root',
//     //your db password
//     password: 'password',
//     //your db name
//     database: 'dbname'
// });
// //connects to server
// connection.connect();
// //what is line 23 doing?
// router.get('/', function(req, res) {
//     connection.query("SELECT * FROM projects", function(err, rows){
//         if(err) throw err;
//         res.render('index', {
//             "projects": rows
//         });
//     });
// });
// //duplicate the above code to add a route
// //to deails file. 
// // include parameters for :id
// module.exports = router;

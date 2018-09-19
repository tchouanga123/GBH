var database = [
	{
		username: "franck",
		password: "s"
	},
	{
		username: "kofi",
		password: "ff",
		},
		{
		username: "anita",
		password: "pp"

	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
function valid(username,password) {
	for (var i = 0; i < database.length; i++) {
	 if (database[i].username === username 
	 	&& database[i].password === password) { return true;}
	 	 }return false;
	 }
	function sign(username,password) {
		console.log(valid(username,password));
	}
		
	


var user = prompt("what is your username")
var pass = prompt("whatt is your password")
sign(user,pass)

// }
// function sign(user,pass) {
// 	if (valid(user,pass)) 
// 		{console.log(newsfeed);} else {
// 			alert("sorry,you are wrong")
// 		}
// }
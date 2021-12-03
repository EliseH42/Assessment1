// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });



console.log("Welcome to the password validator tool!")
console.log(""+
""+
"                                                    .___"+
"___________    ______ ________  _  _____________  __| _/"+
"\____ \__  \  /  ___//  ___/\ \/ \/ /  _ \_  __ \/ __ | "+
"|  |_> > __ \_\___ \ \___ \  \     (  <_> )  | \/ /_/ | "+
"|   __(____  /____  >____  >  \/\_/ \____/|__|  \____ | "+
"|__|       \/     \/     \/                          \/ "+
""+
"")


// readline.question("Please enter a password to validate:"), password => {
    
//     readline.close();
// }

var password = "1pppa"
var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

if (password.length > 10 && hasnumber(password)&& regex.test(password === false)){
    console.log("This is a good password.")
}else{
    console.log("Please pick a better password.")
}

const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("Welcome to the password validator tool!")
console.log(""+
"\n"+
"                                                    .___\n"+
"___________    ______ ________  _  _____________  __| _/\n"+
"|____ \\__  \\  /  ___//  ___/\\ \\/ \\/ /  _ \\_  __ \\/ __ | \n"+
"|  |_> > __ \\_\\___ \\ \\___ \\  \\     (  <_> )  | \\/ /_/ | \n"+
"|   __(____  /____  >____  >  \\/\\_/ \\____/|__|  \\____ | \n"+
"|__|       \\/     \\/     \\/                          \\/ \n"+
"\n"+
"\n")


reader.question("Please enter a password to validate:"), function(password){

    var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    if (password.length > 10 && hasnumber(password)&& regex.test(password === false)){
        console.log("This is a good password.")
    }else{
        console.log("Please pick a better password.")
    }
}
reader.close()

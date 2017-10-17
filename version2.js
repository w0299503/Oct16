/**
 * Created by w0299503 on 10/16/2017.
 */

var readlineSync = require('readline-sync');
var last_name = parseInt(readlineSync.question('Enter the name of the family: '));


// processing:

if (last_name == Potter)
{

    the_user_is_assigned_to = "Gryffindor";


}
else if(last_name == Mllfoy)
{
    the_user_is_assigned_to = "Slytherin";
}
else if(random_number == 3)
{
    the_user_is_assigned_to = "Ravenclaw";
}
else
{
    the_user_is_assigned_to = "Slytherin";
}

// output

console.log(`The user is assigned to: ${the_user_is_assigned_to}`);

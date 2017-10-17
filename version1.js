/**
 * Created by w0299503 on 10/16/2017.
 */

/* Exercise 1: Hogwart Storing Hat */

"use strict";
var readlineSync = require('readline-sync');

// variables and inputs

var random_number = parseInt(readlineSync.question('pick_random_number: '));
var the_user_is_assigned_to;
var last_name =readlineSync.question('Enter the name of the family: ');
var family_name_assigned_to;

// processing:

if (random_number == 1)
{

    the_user_is_assigned_to = "Gryffindor";


}
else if(random_number == 2)
{
    the_user_is_assigned_to = "Hufflepuff";
}
else if(random_number == 3)
{
    the_user_is_assigned_to = "Ravenclaw";
}
else
{
    the_user_is_assigned_to = "Slytherin";
}

if (last_name.toUpperCase() == "POTTER")
{

    family_name_assigned_to = "Gryffindor";


}
if(last_name.toUpperCase() == "MLLFOY")
{
    family_name_assigned_to = "Slytherin";
}



// output

console.log(`The user is assigned to: ${the_user_is_assigned_to}`);
console.log(`The family name is assigned to: ${family_name_assigned_to}`);
let raceNumber = Math.floor(Math.random() * 1000);

/* Runners who are 16 years old and registered early will run at 12:30 pm.
Runners who are 16 years old and did NOT register early will run at 12:30 pm.

Runners who are 18 years old and registered early should see the registration desk.
Runners who are 18 years old and did NOT register early should see the registration desk.

Runners who are 25 years old and registered early will run at 9:30 am. 
Runners who are 25 years old and did NOT register early will run at 11:00 am. */
let registeredEarly = true; // true or false.
let age = 16;

if(registeredEarly && age > 18){
    raceNumber += 1000;
}

if(registeredEarly && age > 18){
    console.log(`Race will begin at 9:30 am, your race number is: ${raceNumber}.`);
}
else if(!registeredEarly && age > 18){
    console.log(`Race will begin at 11:00 am, your race number is: ${raceNumber}.`);
}
else if(age < 18){
    console.log(`Race will begin at 12:30 pm, your race number is: ${raceNumber}.`);
}
else{
    console.log('Please, approach the registration desk. Thank you!');
}

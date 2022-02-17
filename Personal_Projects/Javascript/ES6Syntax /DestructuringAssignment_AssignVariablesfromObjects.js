//Destructuring allows you to assign a new variable name when extracting values. 
//You can do this by putting the new name after a colon when assigning the value.

//Replace the two assignments with an equivalent destructuring assignment. 
//It should still assign the variables highToday and highTomorrow the values of today and tomorrow
// from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
    
  const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

  const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  

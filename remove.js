function ValidateAndSanitize(string){
    //remove white space
    const input=string.trim();
  
  // convert to lower case
    const input1=input.toLowerCase();
    
    // remove special character
    const removeCharacter=input1.replace(/[^a-z0-9\s]/g, '');
    return removeCharacter;
  
  
  }
  const userQuery="@ Food Delivery"
  
  const stringhello=ValidateAndSanitize(userQuery)
  console.log(stringhello);
// Function to find matching drivers by name, case insensitive
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function to find drivers whose names start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // Function to find drivers by matching name in an array of driver objects
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Example usage
  const drivers = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'New York' },
    { name: 'Sarah', hometown: 'Phoenix' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'bobby')); // ['Bobby']
  console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'Sa')); // ['Sammy', 'Sally', 'Sarah']
  console.log(matchName(drivers, 'Bobby')); // [{ name: 'Bobby', hometown: 'New York' }, { name: 'Bobby', hometown: 'Tampa Bay' }]


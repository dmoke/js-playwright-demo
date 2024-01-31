function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log('Start asyncFunction');
    await delay(2000); // Pause for 2 seconds
    console.log('After first await'); // This line will be executed after 2 seconds
  }
  
  asyncFunction();
  
  // Code outside of the asyncFunction
  console.log('Code outside of asyncFunction');
  
  // This code continues to execute while the asyncFunction is awaiting
  
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log('Start asyncFunction');
    await delay(2000);
    console.log('After first await');
  }
  
  asyncFunction();
  

  console.log('Code outside of asyncFunction');
function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  async function getData() {
    try {
      const [comments, post] = await Promise.all([
        fetchData('https://jsonplaceholder.typicode.com/comments/'),
        fetchData('https://jsonplaceholder.typicode.com/posts/2')
      ]);
      
      console.log('Comments:', comments);
      console.log('Post:', post);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  getData();
  
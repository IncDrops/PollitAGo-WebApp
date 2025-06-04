const axios = require('axios');

axios.get('https://api.github.com')
  .then(response => {
    console.log('GitHub API status:', response.status);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


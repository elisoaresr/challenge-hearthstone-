const express = require('express');
const bodyParser = require('body-parser');
const app = express()


app.listen(3005, function() {
  console.log('server running on port 3005')
});

app.get('/', (request, response) => {
  response.send('Teste!')
});

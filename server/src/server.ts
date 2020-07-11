import express from 'express'
import bodyParser from 'body-parser';
const app = express();


app.get('/', (request, response) => {
  response.send('Application!')
});

app.listen(3005, () => {
  console.log('server running on port 3005')
});



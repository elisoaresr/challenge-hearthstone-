import express, { request, response } from 'express';
import routes from './routes';

const cors = require('cors');
const app = express();

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.use(express.json());
app.use(routes);

app.listen(3333);



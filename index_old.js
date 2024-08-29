import express from 'express';
import { routeHello, routeAPINames } from './routes.js';

const server = express();
const port = 3000;

server.get('/hello', function (req, res) {
  const response = routeHello(req, res);
  res.send(response);
});

server.get('/api/names', async function (req, res) {
  let response;
  try {
    response = await routeAPINames(req, res);
  } catch (err) {
    console.error(err);
}
  res.send(response);
});

server.listen(port, function () {
  console.log('Server listening on port ' + port);
  
});
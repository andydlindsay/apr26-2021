const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request.method);
  // console.log(request.url);

  const req = `${request.method} ${request.url}`;
  console.log(req);
  // GET /users

  if (req === 'GET /users') {
    response.write('you have requested all the users');
    response.end();
  } else if (req === 'GET /home') {
    response.write('you are at the home page');
    response.end();
  } else {
    response.write('page does not exist');
    response.end();
  }
  
});

server.listen(34765);

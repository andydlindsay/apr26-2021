const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;

// tell express to use ejs
app.set('view engine', 'ejs');

const morganMiddleware = morgan('dev');
app.use(morganMiddleware);

// app.use((req, res, next) => {
//   console.log(req.method);
//   console.log(req.url);

//   // funcThatReturnsAPromise()
//   //   .then(() => {
//   //     next();
//   //   })

//   next();
// });

// GET /users
app.get('/users', (req, res) => {
  // res.status(204);

  // res.send('here are all the users!!');

  // res.json({
  //   message: 'hello world'
  // })

  // console.log(__dirname);
  // res.sendFile(`${__dirname}/index.html`);

  const templateVars = {
    name: 'Elon',
    friend: 'Reggie',
    food: 'cake',
    verb: 'snowboarding'
  };

  res.render('users', templateVars);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

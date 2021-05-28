const express = require('express');
const router = express.Router();

const postRouterFn = (dbConnection) => {

  // GET /api/posts/
  router.get('/', (req, res) => {
    dbConnection.query('SELECT * FROM posts;')
      .then(response => {
        res.json(response.rows);
      });
  });

  // GET /api/posts/:id
  router.get('/:id', (req, res) => {
    dbConnection.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then(response => {
        res.json(response.rows[0]);
      });
  });


  return router;
};

module.exports = postRouterFn;

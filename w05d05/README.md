# W05D05 - Mid-term Project Kickoff

### Pick a project

### User Stories
* describe how users will interact with our app
* As a ____, I can _____, because ______

* As a logged-in user, I can see a list of avail maps, because I want to see interesting things in my area
* As a user, I can see the items avail at a restaurant, because I am hungry!

* As a non-logged-in user, I can't edit someone else's map, because it doesn't belong to me

* As a logged-in user, I can favourite a map, because I want to see it later AND the heart icon turns red

### Identify Resources
* nouns === resources === table
* build out the ERD

### Build our Routes
* we need a way to access that data
* RESTful routes

* REpresentational State Transfer
* The way we interact with our data represents the underlying structure of the data
* naming convention

B GET   /favourites
R GET   /favourites/:id
E POST  /favourites/:id
A POST  /favourites
D POST  /favourites/:id/delete

R GET   /maps/:map_id/pins
R GET   /authors/:author_id/books
R GET   /books/:book_id

B GET     /favourites
R GET     /favourites/:id
E PATCH   /favourites/:id
A POST    /favourites
D DELETE  /favourites/:id

### What are we building?
* none of this has to do with getting a job (directly)
* not about completing the project

* learning how to do a project
* reinforce your learning
* learning how to work on a team

### MVP
* Minimum Viable Product
* Minimum Viable Demo (MVD)

* What is the minimum set of features that we show off in 5 minutes?
* If you're not gonna show it, don't build it

requirements => user stories => erd => routes

### Wireframes/Mockups
* outlines what our web site looks like
* lowest fidelity possible

### User Login
* don't do it
* seriously don't

```js
// localhost:8080/login/42
app.get('/login/:user_id', (req, res) => {
  // cookie-session
  req.session.user_id = req.params.user_id;

  // plaintext cookies
  res.cookie('user_id', req.params.user_id);

  res.redirect('/');
});
```

### Tech Choices
* Front End: HTML/CSS/JS/jQuery/SCSS
* Back End: Node/Postgres
* use the provided skeleton

### SPA vs Multi-page
* if the distinction isn't clear, ask a mentor
* they are not mutually exclusive

### Splitting up the work
* Horizontal = everybody is working on the same layer
* Vertical = everybody working on different layers
* Pair Programming

### Communication
* please communicate with each other
* please let us know if communication stops





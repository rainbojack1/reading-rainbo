const db = require("./../models");

module.exports = app => {
  // Find all books  
  app.get("/api/books", function(req, res) {
    db.Book.find({})
      .then(allBooks => {
        res.json(allBooks);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // Find by title
  app.get("/api/books/title", function(req, res) {
    console.log("Title Search: ", req.query.q);  
    db.Book.find({title:/req.query.q/i})
      .then(books => {
        console.log("Found: ", books);
        res.json(books);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // Find by author
  app.get("/api/books/author", function(req, res) {
    console.log("Author Search: ", req.query.q);  
    db.Book.find({author:/req.query.q/i})
      .then(books => {
        console.log("Found: ", books);
        res.json(books);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/newBook", function(req, res) {
    db.Book.create(req.body)
      .then(newBook => {
        console.log("New book added: ", newBook);
        res.json(newBook);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
};

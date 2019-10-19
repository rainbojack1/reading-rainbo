const db = require("./../models");

module.exports = app => {
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

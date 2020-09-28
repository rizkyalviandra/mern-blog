const app = require("express")();

app.use(() => {
  console.log("hello");
});

app.listen(3001, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("listening on port 3001...");
  }
});

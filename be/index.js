const app = require("express")();
const productRoutes = require("./src/routes/products");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: false });

const allowCrossDomain = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
};

app.use(jsonParser);
app.use(urlParser);
app.use(allowCrossDomain);
app.use("/v1/customer", productRoutes);

app.listen(3001, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("listening on port 3001...");
  }
});

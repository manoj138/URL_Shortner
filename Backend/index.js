require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require("cors")

app.use(cors());
app.use(express.json());

const {connectMongoDB} = require("./src/config/mongoDB");
connectMongoDB()

const UrlRoutes  = require('./src/routes/UrlRoutes');
const AuthRoutes = require('./src/routes/AuthRoutes');
const UrlController = require('./src/controllers/UrlController');

app.use("/api/auth", AuthRoutes);
app.use("/api/url", UrlRoutes);
app.get("/:shortCode", UrlController.redirectUrl);

app.get('/', (req, res) => {
  res.send('Hello World! Express server is running.');
});


if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;

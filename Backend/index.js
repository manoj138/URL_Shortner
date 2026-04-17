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

app.use("/api/url", UrlRoutes);

app.get('/', (req, res) => {
  res.send('Hello World! Express server is running.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

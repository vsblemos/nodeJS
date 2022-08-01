const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
    res.json({message:'Olá Mundo!'})
  })

app.listen(3333, () => console.log("server is online at port 3333"));


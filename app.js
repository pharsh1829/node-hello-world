const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello its working"));

app.listen(8080, () => console.log("Server is running on 8080"));

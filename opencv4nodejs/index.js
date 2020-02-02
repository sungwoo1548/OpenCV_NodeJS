const express = require("express");

const app = express();
app.use(express.json());

app.use("/", require("./routers/index"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
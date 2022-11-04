const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/", (req, res) => {
  const input = req.body;
  const operationType = input.operation_type;
  const x = input.x;
  const y = input.y;

  if (operationType === "addition") {
    return res.status(200).json({
      slackUsername: "ceasarSkills",
      result: x + y,
      operation_type: operationType,
    });
  } else if (operationType === "subtraction") {
    return res.status(200).json({
      slackUsername: "ceasarSkills",
      result: y - x,
      operation_type: operationType,
    });
  } else if (operationType === "multiplication") {
    return res.status(200).json({
      slackUsername: "ceasarSkills",
      result: y * x,
      operation_type: operationType,
    });
  } else {
    return res
      .status(200)
      .json({ message: " Please input a correct json format" });
  }
});

// Spinig up the server using IIFE
(() => {
  app.listen(PORT, () => {
    return console.log(`Server is listening on port: ${PORT}`);
  });
})();

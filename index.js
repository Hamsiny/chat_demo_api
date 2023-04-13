const express = require("express");
const app = express();
const { Client } = require("pg");

const client = new Client({
  user: "hamsiny",
  host: "chatdemodatabase.postgres.database.azure.com",
  database: "postgres",
  password: "Hjppvurtne1",
//   port: 5432,
//   ssl: true,
});

app.get("/tests", async (req, res) => {
  try {
	client.connect();
    const result = await client.query("SELECT * FROM test_table");
	client.end();
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving results from database");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


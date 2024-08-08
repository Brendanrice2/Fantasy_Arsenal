const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection setup
const db = mysql.createConnection({
  host: 'your-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Endpoint to fetch data
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM your_table';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
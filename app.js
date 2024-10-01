import express from 'express';
import pg from 'pg';
import axios from 'axios';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL pool setup
const db=new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "permalist",
    password: "3201",
    port: 5432,
  });
  
  app.get("/", async (req, res) => {
    const sortBy = req.query.sortBy;  // Extract from query parameters for GET request
    const sortOrder = req.query.sortOrder;  // Extract from query parameters for GET request
    console.log(sortBy);
    console.log(sortOrder);
    try {
        const result = await db.query(`SELECT * FROM books ORDER BY ${sortBy} ${sortOrder}`);
        res.render("index.ejs", { book: result.rows });
    } catch (err) {
        console.log(err);
    }
});


app.get('/add', (req, res) => {
    res.render('add-book');
  });

// Routes will be added here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

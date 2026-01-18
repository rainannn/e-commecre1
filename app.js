const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const calculator = require('./utils/calculator');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'G00485964'
});


//db connect
db.connect((err) => {
    if (err) {
        console.error('Could not connect to database: ' + err.stack);
        return;
    }
    console.log('Database connected successfully.');
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            // Error Message
            return res.status(500).send("Failed to load products.");
        }
        res.render('index', { products: results });
    });
});

// LOGIN PAGE
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

//AUTH
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'user@123.com' && password === 'pass') {
        res.send("<h1>Login Successful! Preparing order summary...</h1>");
    } else {
        res.render('login', { error: "Incorrect email or password!" });
    }
});

app.get('/login', (req, res) => {
    res.render('login', { error: null });
});



// Server Start
const PORT = 3000;
app.listen(PORT, () => {
});
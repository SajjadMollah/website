const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    const dataToWrite = `Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}, Weight: ${formData.weight}, Height: ${formData.height}\n`;

    
    fs.appendFile('HealthyLifeDB.txt', dataToWrite, (err) => {
        if (err) throw err;
        console.log('Data appended to file.');
    });

    res.redirect('/success.html'); 
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

let tasksCompleted = 0;
let employeeProductivity = 100;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //http://localhost:3000/

app.use(express.static('public'));
/*
app.get('/', (req, res) => {
    res.send('Welcome to Project Manager Game!');
});
*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/game/status', (req, res) => {
    res.json({
        tasksCompleted,
        employeeProductivity
    });
});

app.get('/game/improve', (req, res) => {
    // For simplicity, let's say productivity increases by 10% each click, but not more than 100%.
    employeeProductivity = Math.min(employeeProductivity + 10, 100);
    res.json({ success: true, employeeProductivity });
});

setInterval(() => {
    // For simplicity, let's say productivity decreases by 2% every second
    employeeProductivity = Math.max(employeeProductivity - 2, 0);
    
    // Tasks are completed based on productivity. 
    // E.g., if productivity is 100%, 10 tasks are completed every second.
    tasksCompleted += (employeeProductivity / 100) * 10;

}, 1000);  // This runs every second (1000 milliseconds)


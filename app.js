const express = require('express');
const app = express();
const generateTimetable = require('./timetable');

app.use(express.json());

app.post('/submit', (req, res) => {
  const formData = req.body;
  const generatedTimetable = generateTimetable(formData);
  res.json(generatedTimetable);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

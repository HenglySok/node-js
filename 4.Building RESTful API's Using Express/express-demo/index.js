const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json()); // Middleware to parse JSON bodies
app.get('/', (req, res) => {
    res.send("Hello World");

});

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];
app.get('/api/customers', (req, res) => {
    res.send([1, 2, 3, 4, 5]);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`);
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const { error } = schema.validate(req.body);
    console.log(error)
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});



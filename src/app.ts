import express from 'express';
import Joi from 'joi'; // library for input validation
import {User} from "./interfaces/user"
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

const users: User[] = []

app.get('/', (req, res) => {

    res.status(200).send(`Hello this is the app index`)

});

app.get('/api/users', (req, res) => {

    res.status(200).send(users)

});

app.get('/api/users/:id', (req, res) => {

    const user = users.find(u => u.id === req.params.id)

    if (user)
        res.status(200).send(user)
    else
        res.status(404).send("404: user not found")

});

app.post('/api/users', (req, res) => {

    const validation =  validateUser(req.body)

    //if validation object has an error return bad request
    if(validation.error) {
        res.status(400).send(validation.error.details[0].message)
        return
    }

    const user : User = {
        id: (users.length+1).toString(),
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    users.push(user)
    res.status(200).send(user)

});

app.put('/api/users/:id' , (req, res) => {

    let user = users.find(u => u.id === req.params.id)

    if (!user){
        res.status(404).send("404: user not found")
        return
    }

    const validation = validateUser(req.body)

    //if validation object has an error return bad request
    if(validation.error) {
        res.status(400).send(validation.error.details[0].message)
        return
    }

    const index = users.indexOf(user)

    user = {
        id: user.id,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    users[index] = user

    res.status(200).send(user)

});

app.delete('/api/users/:id', (req, res) => {

    let user = users.find(u => u.id === req.params.id)

    if (!user){
        res.status(404).send("404: user not found")
        return
    }

    const index = users.indexOf(user)
    users.splice(index,1)

    res.status(200).send(user)

});

const validateUser = (user:any) => {

    //validation schema
    const schema = Joi.object({
        email: Joi.string().required().min(3).max(128),
        username: Joi.string().required().min(3).max(128),
        password: Joi.string().required().min(3).max(128)
    })

    return schema.validate(user)
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

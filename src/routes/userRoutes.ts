import { app } from "../app"
import * as controller from "../controllers/userController"
import {Routes} from "../interfaces/routesInterface"

export class UserRoutes implements Routes {

    constructor () {
        this.addRoutes()
    }

    addRoutes = () => {

        app.get('/api/users', (req, res) => controller.listUsers(req, res));
    
        app.get('/api/users/:id', (req, res) => controller.getUser(req, res));
    
        app.post('/api/users', (req, res) => controller.postUser(req, res));
    
        app.put('/api/users/:id', (req, res) => controller.updateUser(req, res));
    
        app.delete('/api/users/:id', (req, res) => controller.deleteUser(req, res));
    
    }

}




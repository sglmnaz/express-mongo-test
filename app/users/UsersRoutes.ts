import { CommonRoutesConfig, configureRoutes } from '../common/CommonRoutesConfig';
import express from 'express';
import { UsersController } from './controllers/UsersController';

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {

    constructor(app: express.Application) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }

    configureRoutes() {

        const usersController = new UsersController();
        //post
        this.app.post(`/users`, usersController.createUser);
        
        //get
        this.app.get(`/users`, usersController.listUsers);
        
        //getAll
        this.app.get(`/users/:userId`, usersController.getUserById);
        
        //put
        this.app.put(`/users/:userId`, usersController.put);
       
        //patch
        this.app.patch(`/users/:userId`, usersController.patch);
        
        //delete
        this.app.delete(`/users/:userId`, usersController.getUserById);

    }
}
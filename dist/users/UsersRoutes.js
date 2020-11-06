"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const CommonRoutesConfig_1 = require("../common/CommonRoutesConfig");
const UsersController_1 = require("./controllers/UsersController");
class UsersRoutes extends CommonRoutesConfig_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new UsersController_1.UsersController();
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
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNSb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvdXNlcnMvVXNlcnNSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQW1GO0FBRW5GLG1FQUFnRTtBQUVoRSxNQUFhLFdBQVksU0FBUSx1Q0FBa0I7SUFFL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUVYLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQzlDLE1BQU07UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBELEtBQUs7UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELFFBQVE7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsS0FBSztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhELFFBQVE7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkUsQ0FBQztDQUNKO0FBN0JELGtDQTZCQyJ9
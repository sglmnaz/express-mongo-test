"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const chalk_1 = __importDefault(require("chalk"));
const db_1 = require("./db");
exports.app = express_1.default();
exports.app.use(express_1.default.json());
// Service port
const port = process.env.PORT || 8080;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'express-test';
db_1.connectToDb(url, dbName)
    .then((db) => {
    exports.app.get('/', (req, res) => {
        res.status(200).send(`Hello this is the app index`);
    });
    exports.app.listen(port, () => {
        console.log(`Server running on port ${chalk_1.default.red(port)}`);
        //add routes
        new userRoutes_1.UserRoutes;
    });
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsb0RBQWlEO0FBQ2pELGtEQUF5QjtBQUN6Qiw2QkFBbUM7QUFDdEIsUUFBQSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQUMsV0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFdEQsZUFBZTtBQUNmLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN0QyxpQkFBaUI7QUFDakIsTUFBTSxHQUFHLEdBQUcsMkJBQTJCLENBQUM7QUFDeEMsZ0JBQWdCO0FBQ2hCLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUU5QixnQkFBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7S0FFbkIsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFFVCxXQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUV0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBRXZELENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLGVBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXhELFlBQVk7UUFDWixJQUFJLHVCQUFVLENBQUE7SUFFbEIsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7S0FFRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUEifQ==
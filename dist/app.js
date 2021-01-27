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
const url = process.env.DB_URL || 'mongodb://localhost:27017';
// Database Name
const dbName = process.env.DB_NAME || 'express-test';
db_1.connectToDb(url, dbName)
    .then((db) => {
    exports.app.get('/', (req, res) => {
        const CollectionName = 'users';
        const collection = db.collection(CollectionName);
        collection.insertOne({
            email: "francesca.capodanno@synclab.it",
            username: "francesca.capodanno",
            password: "nando_01"
        })
            .then(() => console.log('post succesfull'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsb0RBQWlEO0FBQ2pELGtEQUEwQjtBQUMxQiw2QkFBbUM7QUFDdEIsUUFBQSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQUMsV0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFLdEQsZUFBZTtBQUNmLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN0QyxpQkFBaUI7QUFDakIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksMkJBQTJCLENBQUM7QUFDOUQsZ0JBQWdCO0FBQ2hCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFLLGNBQWMsQ0FBQztBQUV0RCxnQkFBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7S0FFbkIsSUFBSSxDQUFDLENBQUMsRUFBTSxFQUFFLEVBQUU7SUFFYixXQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUV0QixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUE7UUFDOUIsTUFBTSxVQUFVLEdBQWdCLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDN0QsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUNqQixLQUFLLEVBQUcsZ0NBQWdDO1lBQ3hDLFFBQVEsRUFBRyxxQkFBcUI7WUFDaEMsUUFBUSxFQUFHLFVBQVU7U0FDeEIsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtRQUN6QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBRXZELENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLGVBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXhELFlBQVk7UUFDWixJQUFJLHVCQUFVLENBQUE7SUFFbEIsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7S0FFRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUEifQ==
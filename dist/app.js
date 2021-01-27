"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const chalk_1 = __importDefault(require("chalk"));
exports.app = express_1.default();
exports.app.use(express_1.default.json());
const port = process.env.PORT || 8080;
exports.app.get('/', (req, res) => {
    res.status(200).send(`Hello this is the app index`);
});
exports.app.listen(port, () => {
    console.log(`Server running on port ${chalk_1.default.red(port)}`);
    //add routes
    new userRoutes_1.UserRoutes;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsb0RBQWlEO0FBQ2pELGtEQUF5QjtBQUNaLFFBQUEsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUFDLFdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUd0QyxXQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUV0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRXZELENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLGVBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXhELFlBQVk7SUFDWixJQUFJLHVCQUFVLENBQUE7QUFFbEIsQ0FBQyxDQUFDLENBQUMifQ==
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const taRoutes_1 = __importDefault(require("./routes/taRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use("/api/ta", taRoutes_1.default);
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.DB_URI)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log("DB Connection Error:", err));
app.use('/api/ta', require('./src/routes/taRoutes'));
app.listen(process.env.PORT || 5002, () => console.log("TA Evaluation Server Running..."));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taController_1 = require("../controllers/taController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post("/evaluate/distribute", auth_1.authMiddleware, taController_1.distributeEvaluations);
router.post("/evaluate/flag", auth_1.authMiddleware, taController_1.flagOutliers);
router.post("/evaluate/review", auth_1.authMiddleware, taController_1.reviewSubmission);
exports.default = router;

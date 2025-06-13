"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSubmission = exports.flagOutliers = exports.distributeEvaluations = void 0;
const Evaluation_1 = __importDefault(require("../models/Evaluation"));
const TAReview_1 = __importDefault(require("../models/TAReview"));
// Distribute evaluations to peers
const distributeEvaluations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { submissionId, peerEvaluations } = req.body;
        const newEval = new Evaluation_1.default({ submissionId, peerEvaluations });
        yield newEval.save();
        res.status(201).json(newEval);
    }
    catch (error) {
        res.status(500).json({ message: "Error distributing evaluations", error });
    }
});
exports.distributeEvaluations = distributeEvaluations;
// Flag incorrect evaluations
const flagOutliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { evaluationId, reason } = req.body;
        const flaggedEval = yield Evaluation_1.default.findByIdAndUpdate(evaluationId, { flagged: true }, { new: true });
        res.json({ message: "Evaluation flagged for review", flaggedEval });
    }
    catch (error) {
        res.status(500).json({ message: "Error flagging outliers", error });
    }
});
exports.flagOutliers = flagOutliers;
// TA reviews flagged evaluations
const reviewSubmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { evaluationId, taId, status, comments } = req.body;
        const review = new TAReview_1.default({ evaluationId, taId, status, comments });
        yield review.save();
        if (status === "Escalated") {
            yield Evaluation_1.default.findByIdAndUpdate(evaluationId, { taReviewed: true }, { new: true });
        }
        res.status(201).json(review);
    }
    catch (error) {
        res.status(500).json({ message: "Error reviewing submission", error });
    }
});
exports.reviewSubmission = reviewSubmission;

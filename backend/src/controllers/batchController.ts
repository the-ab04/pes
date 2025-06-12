import { Request, Response } from "express";
import { Batch } from "../models/Batch.ts";
import "../models/Course.ts";
import "../models/User.ts";

// Get all batches
export const getAllBatches = async (_req: Request, res: Response) => {
  try {
    const batches = await Batch.find().populate("course").populate("students");
    res.json(batches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch batches" });
  }
};

// Get a batch by ID
export const getBatchById = async (req: Request, res: Response) => {
  try {
    const batch = await Batch.findById(req.params.id)
      .populate("course")
      .populate("students");
    if (!batch) return res.status(404).json({ error: "Batch not found" });
    res.json(batch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch batch" });
  }
};

// Create a new batch
export const createBatch = async (req: Request, res: Response) => {
  try {
    const { name, course, students } = req.body;
    const batch = new Batch({ name, course, students });
    await batch.save();
    res.status(201).json(batch);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create batch" });
  }
};

// Update a batch
export const updateBatch = async (req: Request, res: Response) => {
  try {
    const { name, course, students } = req.body;
    const batch = await Batch.findByIdAndUpdate(
      req.params.id,
      { name, course, students },
      { new: true }
    )
      .populate("course")
      .populate("students");
    if (!batch) return res.status(404).json({ error: "Batch not found" });
    res.json(batch);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update batch" });
  }
};

// Delete a batch
export const deleteBatch = async (req: Request, res: Response) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);
    if (!batch) return res.status(404).json({ error: "Batch not found" });
    res.json({ message: "Batch deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete batch" });
  }
};

// Get batch collection info (size and all entries)
export const getBatchCollectionInfo = async (_req: Request, res: Response) => {
  try {
    const count = await Batch.countDocuments();
    const entries = await Batch.find().populate("course").populate("students");
    res.json({ collectionSize: count, entries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch batch collection info" });
  }
};

// Get batches for a specific student
export const getBatchesByStudentId = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const batches = await Batch.find({ students: studentId })
      .populate("course")
      .populate("students");
    res.json(batches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch batches for student" });
  }
};

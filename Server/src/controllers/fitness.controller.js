import FitnessTrack from "../models/FitnessTrack.js";

// ----------------------
// Get Fitness Data by User
// ----------------------
export const getFitnessData = async (req, res) => {
  try {
    const { userId } = req.params;

    const records = await FitnessTrack.find({ userId }).sort({ date: -1 });

    return res.status(200).json(records);

  } catch (error) {
    console.error("Get Fitness Data Error:", error);
    return res.status(500).json({ message: "Failed to fetch fitness data" });
  }
};

// ----------------------
// Add Fitness Data
// ----------------------
export const addFitnessData = async (req, res) => {
  try {
    const { userId, ...rest } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const entry = new FitnessTrack({ userId, ...rest });
    await entry.save();

    return res.status(201).json({ message: "Data saved successfully" });

  } catch (error) {
    console.error("Add Fitness Data Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
// Update Fitness Data
export const updateFitnessData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = await FitnessTrack.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Fitness record not found" });
    }

    return res.status(200).json(updatedRecord);

  } catch (error) {
    console.error("Update Fitness Data Error:", error);
    return res.status(500).json({
      message: "Failed to update fitness data",
      error: error.message,
    });
  }
};

export const deleteFitnessData=async(req,res)=>{
  try {
    const {id}=req.params;
    const deletedRecord=await FitnessTrack.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Fitness record not found" });
    }

    return res.status(200).json({ message: "Fitness record deleted successfully" });
  } catch (error) {
     return res.status(500).json({ message: `Failed to delete fitness data,${error}` });
  }
}

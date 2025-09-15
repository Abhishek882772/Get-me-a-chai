import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

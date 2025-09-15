"use server"

import connectDB from "@/lib/mongoose";
import Payment from "@/models/Payment";

export async function savePayment(username, paymentform) {
  try {
    await connectDB();

  const newPayment = new Payment({
  username,
  name: paymentform.name,
  message: paymentform.message,
  amount: Number(paymentform.amount),
  email: paymentform.email,
  to: paymentform.to,
});


    await newPayment.save();

    return { success: true };
  } catch (err) {
    console.error("❌ Error saving payment:", err);
    return { success: false, error: err.message };
  }
}

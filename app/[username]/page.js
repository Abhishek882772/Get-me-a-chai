"use client";
import Paymentpage from "@/components/Paymentpage";
import React, { useState } from "react";


export default function Username({ params }) {
  const [Amount, setAmount] = useState(0);
  const { username } = React.use(params); 

  return (
    <>
      <Paymentpage username={username} />
    </>
  );
}

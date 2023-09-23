"use client";

import React from "react";
import AutoCompleteAddres from "./AutoCompleteAddres";

function Booking() {
    const screenHight = window.innerHeight
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md" style={{height:screenHight}}>
        <AutoCompleteAddres />
      </div>
    </div>
  );
}

export default Booking;

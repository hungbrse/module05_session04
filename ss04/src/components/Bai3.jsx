import React from "react";
import { useState } from "react";

export default function Bai3() {
  const [check, setCheck] = useState(false);
  const handleColor = () => {
    setCheck(true);
  };
  return (
    <div>
      <p style={{ color: check ? "red" : "" }}>Tiêu đề văn bản</p>
      <button onClick={handleColor}>Thay đổi màu</button>
    </div>
  );
}

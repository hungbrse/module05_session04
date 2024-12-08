import React from "react";
import { useState } from "react";

export default function Bai10() {
  const likes = ["Đi chơi", "Code", "Bơi lội", "Đá bóng"];
  const [like, setLike] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setLike((prev) => {
      if (e.target.checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };
  return (
    <div>
      <p>Sở thích:{like.join(", ")}</p>
      {likes.map((like) => (
        <div key={like}>
          <label>{like}</label>
          <input type="checkbox" value={like} onChange={handleChange} />
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { useState } from "react";

export default function Bai4() {
  const [status, setStatus] = useState(false);
  const handleToggle = () => {
    setStatus(!status);
  };
  return (
    <div>
      {/* Cách 1 */}
      {/* {!status && <button onClick={handleToggle}>Hiện</button>}
      {status && (
        <>
          <button onClick={handleToggle}>Ẩn</button>
          <p>Tiêu đề văn bản</p>
        </>
      )} */}

      {/* Cách 2 */}

      {status ? (
        <>
          <button onClick={handleToggle}>Ẩn</button>
          <p>Tiêu đề văn bản</p>
        </>
      ) : (
        <button onClick={handleToggle}>Hiện</button>
      )}
    </div>
  );
}

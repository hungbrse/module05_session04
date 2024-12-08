import React, { useState } from "react";

export default function ListWork() {
  const [arrWork, setArrWork] = useState([]); // Danh sách công việc đã hoàn thành
  const [newWork, setNewWork] = useState(""); // Công việc mới
  const [error, setError] = useState(""); // Thông báo lỗi
  const initialWorkList = [
    { id: 1, name: "Code" },
    { id: 2, name: "Đá bóng" },
    { id: 3, name: "Đi chơi" },
    { id: 4, name: "Chơi Game" },
  ];
  const [listWorks, setListWorks] = useState(initialWorkList); // Danh sách công việc

  // Xử lý thay đổi trạng thái checkbox
  const handleChange = (e) => {
    const result = e.target.value;
    setArrWork((prev) => {
      if (e.target.checked) {
        return [...prev, result];
      } else {
        return prev.filter((item) => item !== result);
      }
    });
  };

  const count = arrWork.length; // Đếm số công việc hoàn thành

  // Xử lý nhập tên công việc mới
  const handleInput = (e) => {
    setNewWork(e.target.value);
  };

  // Xử lý thêm công việc mới
  const handleAdd = () => {
    if (!newWork.trim()) {
      setError("Vui lòng nhập tên công việc!");
      return;
    }
    if (listWorks.some((item) => item.name === newWork)) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    const newId = Math.max(...listWorks.map((item) => item.id), 0) + 1;
    const newTask = { id: newId, name: newWork.trim() };
    setListWorks((prev) => [...prev, newTask]);
    setNewWork("");
    setError("");
  };

  // Xử lý xóa công việc
  const handleDeleteWork = (id) => {
    setListWorks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ width: "400px" }}>
      <h3>Danh sách công việc</h3>
      <div
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "70%" }}>
          <input
            type="text"
            style={{ padding: "5px", width: "100%" }}
            value={newWork}
            onChange={handleInput}
          />
        </div>
        <div>
          <button onClick={handleAdd}>Thêm</button>
        </div>
      </div>
      {error && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {error}
        </p>
      )}
      <div>
        {listWorks.map((work) => (
          <div
            key={work.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <div>
              <input
                type="checkbox"
                value={work.name}
                onChange={handleChange}
              />
              <label>{work.name}</label>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <button onClick={() => alert(`Sửa công việc: ${work.name}`)}>
                  Sửa
                </button>
              </div>
              <div>
                <button onClick={() => handleDeleteWork(work.id)}>Xóa</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>
          Công việc đã hoàn thành: {count}/{listWorks.length}
        </p>
      </div>
    </div>
  );
}

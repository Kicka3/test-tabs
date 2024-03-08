import React from "react";
import "./actionBtn.css";

export const ActionBtn: React.FC = () => {
  const BtnName = "Кнопка действия";

  const ActionBtnHacndler = () => {
    console.log("action btn click!");
  };

  return (
    // <div className={"btn-wrapper"}>
    <button className={"action-btn"} onClick={ActionBtnHacndler}>
      {BtnName}
    </button>
    // </div>
  );
};

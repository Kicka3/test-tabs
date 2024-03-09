import React from "react";
import "./actionBtn.css";

export const ActionBtn: React.FC = () => {
  const BtnName = "Кнопка действия";

  const ActionBtnHacndler = () => {
    console.log("action btn click!");
  };

  return (
    <button className={"action-btn"} onClick={ActionBtnHacndler}>
      {BtnName}
    </button>
  );
};

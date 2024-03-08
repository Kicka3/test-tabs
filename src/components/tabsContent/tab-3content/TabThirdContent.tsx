import React from "react";
import "./tabTwoContent.css";
import { ActionBtn } from "../../action-button/ActionBtn";

export const TabTwoContent = () => {
  return (
    <>
      <div className={"content-two-container"}>
        <div className={"content-two-wrapper"}>
          <h2 className={"content-one-title"}>Контент таба 1</h2>
          <div className={"content-one-form"}>
            <form action={"#"}>
              <div className={"form-row"}>
                <div className="field">
                  <input type="text" required />
                  <label htmlFor="">First Name</label>
                </div>

                <div className="field">
                  <input type="text" required />
                  <label htmlFor="">Last Name</label>
                </div>

                <div className="field">
                  <input type="text" required />
                  <label htmlFor="">Last Name</label>
                </div>
              </div>
            </form>
          </div>
          <ActionBtn />
        </div>
      </div>
    </>
  );
};

import React from "react";
import "./form.css";

type FormPropsType = {
  title: string;
};

export const Form: React.FC<FormPropsType> = (props) => {
  const { title } = props;

  return (
    <form action={"#"}>
      <div className={"form-row"}>
        <div className="field">
          <input type="text" required />
          <label htmlFor="">{title}</label>
        </div>

        <div className="field">
          <input type="text" required />
          <label htmlFor="">{title}</label>
        </div>

        <div className="field">
          <input type="text" required />
          <label htmlFor="">{title}</label>
        </div>
      </div>
    </form>
  );
};

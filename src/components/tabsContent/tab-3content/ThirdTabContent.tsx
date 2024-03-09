import React from "react";
import "../tab-2content/SecondTabContent.css";
import { ActionBtn } from "../../action-button/ActionBtn";
import { Form } from "../../form/Form";

type SecondTabContentPropsType = {
  tabTitle: string;
};

export const ThirdTabContent: React.FC<SecondTabContentPropsType> = (props) => {
  const { tabTitle } = props;

  const title = "Имя*";

  return (
    <>
      <div className={"content-two-container"}>
        <div className={"content-two-wrapper"}>
          <div className={"main-content-wrapper"}>
            <h2 className={"content-two-title"}>{tabTitle}</h2>
            <div className={"content-two-form"}>
              <Form title={title} />
            </div>
          </div>
          <ActionBtn />
        </div>
      </div>
    </>
  );
};

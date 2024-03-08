import React from "react";
import "./thirdTabContent.css";
import { ActionBtn } from "../../action-button/ActionBtn";
import { Form } from "../../form/Form";

type TabThirdContentPropsType = {
  tabTitle: string;
};

export const ThirdTabContent: React.FC<TabThirdContentPropsType> = (props) => {
  const { tabTitle } = props;
  const title = "Имя*";

  return (
    <>
      <div className={"content-three-container"}>
        <div className={"content-three-wrapper"}>
          <div className={"main-content-wrapper"}>
            <h2 className={"content-three-title"}>{tabTitle}</h2>
            <div className={"content-one-form"}>
              <Form title={title} />
            </div>
          </div>
          <ActionBtn />
        </div>
      </div>
    </>
  );
};

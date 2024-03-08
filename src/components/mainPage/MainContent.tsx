import React from "react";
import "../mainPage/mainPage.css";
import "./utils/TabsLogic";
import { TabOneContent } from "../tabsContent/tab-1-content/TabOneContent";
import { TabTwoContent } from "../tabsContent/tab-2content/TabTwoContent";

export const MainPage = () => {
  return (
    <>
      <section className={"container"}>
        <div className={"tabs-wrapper"}>
          <div className={"active"}>
            <div className={"tab"}>
              <div className={"tab-content"}>
                <h1 className={"tab-title"}>Заголовок таба 1</h1>
                <span className={"tab-text-wrapper"}>
                  Равным образом, высококачественный прототип будущего проекта способствует
                  повышению качества анализа существующих паттернов
                </span>
              </div>
            </div>
          </div>
          <div className={"tab"}>
            <div className={"tab-content"}>
              <h1 className={"tab-title"}>Заголовок таба 2</h1>
              <span className={"tab-text-wrapper"}>
                Равным образом, высококачественный прототип будущего проекта способствует повышению
                качества анализа существующих паттернов
              </span>
            </div>
          </div>
          <div className={"tab"}>
            <div className={"tab-content"}>
              <h1 className={"tab-title"}>Заголовок таба 3</h1>
              <span className={"tab-text-wrapper"}>
                Равным образом, высококачественный прототип будущего проекта способствует повышению
                качества анализа существующих паттернов
              </span>
            </div>
          </div>
        </div>
        {/*<TabOneContent />*/}
        <TabTwoContent />
      </section>
    </>
  );
};
// <div className="tabs-wrapper">
//   <div className="tabs-container">
//     <div className="tab-container">
//       <div className="active">
//         <i className="dosent work"></i> Заголовок таба 1
//       </div>
//     </div>
//
//     <div className="tab-container">
//       <div>
//         <i className="dosent work"></i> Заголовок таба 2
//       </div>
//     </div>
//
//     <div className="tab-container">
//       <div>
//         <i className="dosent work"></i> Заголовок таба 3
//       </div>
//     </div>
//   </div>
//
//   {/*//Этo scroll*/}
//   <div className="tab-indicator"></div>
//
//   <TabsContent />
// </div>

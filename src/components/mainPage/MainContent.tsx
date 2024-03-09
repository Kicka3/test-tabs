import React, { useState } from "react";
import "./mainContent.css";
import "../../utils/TabsLogic";
import { FirstTabContent } from "../tabsContent/tab-1-content/FirstTabContent";
import { SecondTabContent } from "../tabsContent/tab-2content/SecondTabContent";
import { ThirdTabContent } from "../tabsContent/tab-3content/ThirdTabContent";
import { tabs } from "../../tabs/tabs";

export const MainContent = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabTitle, setTabTitle] = useState<string>("Контент таба 1");

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    switch (index) {
      case 0: {
        setTabTitle("Контент таба 1");
        return;
      }
      case 1: {
        setTabTitle("Контент таба 2");
        return;
      }
      case 2: {
        setTabTitle("Контент таба 3");
        return;
      }
    }
  };

  return (
    <>
      <section className={"container"}>
        <div className={"pageWrapper"}>
          <div className={"tabs-wrapper"}>
            {tabs.map((el) => {
              return (
                <div
                  key={el.id}
                  className={activeTab === el.id ? "active" : ""}
                  onClick={() => handleTabClick(el.id)}
                >
                  <div className={"tab"}>
                    <div className={"tab-content"}>
                      <div className={"tab-title-wrapper"}>
                        <h1 className={"tab-title"}>{el.title}</h1>
                        <button className={`tab-btn ${activeTab === el.id ? "active" : ""}`} />
                      </div>
                      <span className={"tab-text-wrapper"}>{el.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {activeTab === 0 && <FirstTabContent tabTitle={tabTitle} />}
          {activeTab === 1 && <SecondTabContent tabTitle={tabTitle} />}
          {activeTab === 2 && <ThirdTabContent tabTitle={tabTitle} />}
        </div>
      </section>
    </>
  );
};

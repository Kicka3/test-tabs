import React from "react";
import "./tabOnecontent.css";
import { ActionBtn } from "../../action-button/ActionBtn";

export const TabOneContent = () => {
  return (
    <>
      <div className={"content-one-container"}>
        <div className={"content-one-wrapper"}>
          <h2 className={"content-one-title"}>Контент таба 1</h2>
          <div className={"content-one-list"}>
            <p>
              Безусловно, начало повседневной работы по формированию позиции способствует подготовке
              и реализации модели развития.
            </p>
            <ul>
              <li>Элемент ненумерованного списка</li>
              <li>Элемент ненумерованного списка</li>
            </ul>
            <p>
              Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
              обеспечение нашей деятельности выявляет срочную потребность приоретизации разума над
              эмоциями.
            </p>
            <ol>
              <li>Элемент нумерованного списка</li>
              <li>Элемент нумерованного списка</li>
            </ol>
            <p>
              Каждый из нас понимает очевидную вещь: выбранный нами инновационный путь в
              значительной степени обусловливает важность...
            </p>
            <ul>
              <li>Элемент ненумерованного списка</li>
              <li>Элемент ненумерованного списка</li>
            </ul>
          </div>
          <ActionBtn />
        </div>
      </div>
    </>
  );
};

import React, { useState } from "react";
import style from "./Paginator.module.css";
import cn from "classnames";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <>
      <div className={style.paginatorBlock}>
        <div className={style.btnBlock}>
          {portionNumber > 1 && (
            <button
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}>
              PREV
            </button>
          )}
        </div>
        <ul className={style.paginList}>
          {pages
            .filter(
              (elem) =>
                elem >= leftPortionPageNumber && elem <= rightPortionPageNumber
            )
            .map((elem, index) => (
              <li
                className={cn(
                  {
                    [style.selectedPage]: currentPage === elem,
                  },
                  style.pageNumber
                )}
                key={index}
                onClick={() => {
                  onPageChanged(elem);
                }}>
                <p>{elem}</p>
              </li>
            ))}
        </ul>
        <div className={style.btnBlock}>
          {portionCount > portionNumber && (
            <button
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}>
              NEXT
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Paginator;

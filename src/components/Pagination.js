import React from "react";

const Pagination = (props) => {
  // console.log(props.pages);
  // const pagesLink = [];

  // for (let i = 1; i < props.pages; i++) {

  //   pagesLink.push(
  //     <li
  //       className={`${active} pagination_list`}
  //       key={i}
  //       onClick={() => props.nextPage(i)}
  //     >
  //       <a href="#">{i}</a>
  //     </li>
  //   );
  // }

  function pagination() {
    var current = props.currentPage,
      last = props.pages,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      let active = props.currentPage == i ? "active" : "";
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(
        <li
          className={`${active} pagination_list`}
          key={i}
          onClick={() => props.nextPage(i)}
        >
          <a href="#" className="pagination_anchor">
            {i}
          </a>
        </li>
      );
      l = i;
    }

    console.log(rangeWithDots);
    return rangeWithDots;
  }

  return (
    <div className="pagination_container">
      <div className="pagination_list_container">{pagination()}</div>
    </div>
  );
};

export default Pagination;

import React from "react";

const List = () => {
  return (
    <div className="container__lists">
      {todos.map((todo, index) => (
        <div
          className={`container__lists__card ${
            todo.isSelected ? "selected" : ""
          }`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="container__lists__card__left">
            <div className={`circle ${todo.isSelected ? "circle_add" : ""}`}>
              {" "}
              <span>
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.3041L3.6959 7L9.6959 1"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </span>
            </div>
            <p className={` ${todo.isSelected ? "addP" : ""}`}>{todo.task}</p>
          </div>
          <div className="container__lists__card__right">
            <i
              className="fa-solid fa-x"
              onClick={(e) => {
                e.stopPropagation();
                removeTodo(index);
              }}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

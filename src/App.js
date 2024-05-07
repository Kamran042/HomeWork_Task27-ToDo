import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { task: inputValue, isSelected: false }]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleItemClick = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isSelected = !updatedTodos[index].isSelected;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://s3-alpha-sig.figma.com/img/03b8/22a8/10f232874b021926bb904eafb394287f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W2UbKhGFnYrpmolIeEKMcTzg6KklgiEM4qbb~6WHe96Z46VdnziBMQ8lATqEc-OZuJ-bBJAZnXSkbprfyrXdqgbeR3GsvMeljsQ4vngUt7nkqwzoLa6yW-L6HmtBg3g-MzWeuT90eVrCGxCgQ59FW5XP9PppUMbZPJULWFgdk04rvKFiuEsSuKLFfROhUbgrg~ehz2wfjr-3OD2iGSs1I19E-FSEprG3LpvIW-Myd6ynWqrWbK684Q1DbVGk9CUoh3joJcQyHFB94rNeVmbGAoKHb5YLv5lygrNVO-BsuvC1s3S0aaX2YWh5sFoLQLamNfJHirjBqpvcxE7AIjMjBA__"
          alt=""
        />
        <div className="header__bg"></div>
        <div className="container">
          <div className="container__top">
            <h1>TODO</h1>
            <span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="conatinerInp">
            <div className="circleTop"></div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Create a new todo…"
            />
            <button onClick={addTodo}>Add</button>
          </div>
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
                  <div
                    className={`circle ${todo.isSelected ? "circle_add" : ""}`}
                  >
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
                  </div>
                  <p className={` ${todo.isSelected ? "addP" : ""}`}>
                    {todo.task}
                  </p>
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
        </div>
      </div>
    </div>
  );
}

export default App;

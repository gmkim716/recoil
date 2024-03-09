import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./pages/todoList";
import TodoListFilters from "./pages/todoListFilters";

// RecoilRoot 추가
function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;

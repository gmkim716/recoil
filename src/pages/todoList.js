import { useRecoilValue } from "recoil";
import { TodoListStats, todoListState } from "../atoms/todo";
import TodoItem from "../components/todoItem";
import TodoItemCreator from "../components/todoItemCreator";
import TodoListFilters from "./todoListFilters";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;

import { atom, selector, useRecoilValue } from "recoil";

// Atom: 상태를 저장, atom을 읽는 컴포넌트들은 암묵적으로 atom의 값을 구독한다. atom의 값이 변경되면 구독 중인 컴포넌트들이 다시 렌더링된다.
export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// todoListFiletrState와 todoListState를 사용해서 필터링된 리스트를 계산한 filteredTodoListState를 만든다.
// [todoListFilterState, todoListState] 중 변화가 하나라도 일어나면 재실행된다.
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState); // todoListFilterState 값 가져오기
    const list = get(todoListState); // todoListState 값 가져오기

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

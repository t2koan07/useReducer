import { useReducer } from "react";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

type Action =
  | { type: "ADD_TODO"; payload: { title: string } }
  | { type: "TOGGLE_TODO"; payload: { id: string } }
  | { type: "REMOVE_TODO"; payload: { id: string } };

function todosReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO": {
      const trimmedTitle = action.payload.title.trim();
      if (!trimmedTitle) {
        return state;
      }

      const newTodo: Todo = {
        id: Date.now().toString(),
        title: trimmedTitle,
        done: false,
      };

      return [...state, newTodo];
    }

    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, done: !todo.done }
          : todo
      );
    }

    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }

    default:
      return state;
  }
}

export function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  // Public API

  const addTodo = (title: string) => {
    dispatch({ type: "ADD_TODO", payload: { title } });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}

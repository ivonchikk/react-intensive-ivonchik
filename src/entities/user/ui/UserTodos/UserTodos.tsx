import type { FC } from "react";
import type { Todo } from "../../../todo/model/interface";

interface UserTodosProps {
  todos: Todo[];
  userId: string;
}

export const UserTodos: FC<UserTodosProps> = ({ todos, userId }) => {
  const userTodos: Todo[] = todos.filter((todo) => todo.userId === parseInt(userId));

  return (
    <ul>
      {userTodos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

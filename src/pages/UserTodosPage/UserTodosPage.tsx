import { useParams } from "react-router-dom";
import { UserTodos } from "../../entities/user/ui/UserTodos/UserTodos";
import { useGetTodosQuery } from "../../entities/todo/api/commentsApi";

export const UserTodosPage = () => {
  const { id } = useParams();
  
  const{data: todos} = useGetTodosQuery()

  if(!todos) return <div>No todo</div>
  
  return <UserTodos todos={todos} userId={id!}></UserTodos>;
};
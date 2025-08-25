import { useParams } from "react-router-dom";

export const UserTodosPage = () => {
  const { id } = useParams();
  return <div>Todos of User: {id}</div>;
};
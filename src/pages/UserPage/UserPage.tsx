import { useParams } from "react-router-dom";
// import { mockUser } from "../../entities/user/mocks/mockUser";
import { UserCard } from "../../entities/user/ui/UserCard/UserCard";
import { useFetchData } from "../../shared/lib/hooks/useFetchData";
import type { User } from "../../entities/user/model/interface";
import { useEffect } from "react";

export const UserPage = () => {
  const { id } = useParams();
  const urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
  const { data: user, loading, error, fetchData } = useFetchData<User>();

  useEffect(() => {
    fetchData(urlUser)
  },[urlUser])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return <UserCard user={user} />;
};

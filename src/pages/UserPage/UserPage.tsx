import { Outlet, useParams } from "react-router-dom";
import { UserCard } from "../../entities/user/ui/UserCard/UserCard";
import { useFetchData } from "../../shared/lib/hooks/useFetchData";
import type { User } from "../../entities/user/model/interface";
import { useEffect } from "react";
import classes from "./userPage.module.css";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";

export const UserPage = () => {
  const { id } = useParams();
  const urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
  const { data: user, loading, error, fetchData } = useFetchData<User>();

  useEffect(() => {
    fetchData(urlUser);
  }, [urlUser]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={classes.userPage}>
      <UserCard user={user} tabs={<UserTabs userId={user.id} />} />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

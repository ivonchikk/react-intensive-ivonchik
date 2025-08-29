import { Outlet, useParams } from "react-router-dom";
import { UserCard } from "../../entities/user/ui/UserCard/UserCard";
import classes from "./userPage.module.css";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import { useGetUsersQuery } from "../../entities/user/api/usersApi";
import { selectUserById } from "../../entities/user/model/slice/userSlice";
import { useAppSelector } from "../../app/hooks/hooks";

export const UserPage = () => {
  const { id } = useParams();
  const userId = Number(id);
  
  const { isLoading } = useGetUsersQuery();
  const user = useAppSelector((state) => selectUserById(state, userId));

  if (isLoading) return <div>Loading...</div>;
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

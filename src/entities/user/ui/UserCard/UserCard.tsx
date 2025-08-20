import type { User } from "../../model/interface";
import { UserTabs } from "../../../../widgets/UserTabs/UserTabs";
import { Outlet } from "react-router-dom";

import classes from "./userCard.module.css";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className={classes.userCard}>
      <div  className={classes.leftSide}>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>

        <UserTabs userId={user.id}></UserTabs>
      </div>

      <Outlet />
    </div>
  );
};

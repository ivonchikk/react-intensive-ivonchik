import type { User } from "../../model/interface";
import { UserTabs } from "../../../../widgets/UserTabs/UserTabs";

import classes from "./userCard.module.css";
import type { ReactNode } from "react";

interface UserCardProps {
  user: User;
  tabs: ReactNode;
}

export const UserCard = ({ user, tabs }: UserCardProps) => {
  return (
    <div className={classes.userCard}>
      <div className={classes.leftSide}>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>

        {tabs}
      </div>
    </div>
  );
};

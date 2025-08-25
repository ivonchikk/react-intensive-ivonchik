import { NavLink } from "react-router-dom";

import classes from "./userTabs.module.css"

interface UserNavProps {
  userId: string;
}

export function UserTabs({ userId }: UserNavProps) {


  return (
    <nav className={classes.navigate}>
      <NavLink className={({ isActive }) => isActive ? classes.activeLink : classes.link} to={`/user/${userId}/posts`}>Posts</NavLink>
      <NavLink className={({ isActive }) => isActive ? classes.activeLink : classes.link} to={`/user/${userId}/albums`}>Albums</NavLink>
      <NavLink className={({ isActive }) => isActive ? classes.activeLink : classes.link} to={`/user/${userId}/todos`}>Todos</NavLink>
    </nav>
  );
}
import { Link } from "react-router-dom";
import type { Album } from "../user/model/interface";

import classes from "./album.module.css"

interface PostCardProps {
  album: Album;
}

export const AlbumItem = ({ album }: PostCardProps) => {
  return (

      <Link className={classes.link} to={`/albums/${album.id}/photos`}>{album.title}</Link>

  );
};

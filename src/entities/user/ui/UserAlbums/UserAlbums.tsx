import { AlbumItem } from "../../../album/AlbumItem";
import type { Album } from "../../model/interface";

import classes from "./userAlbum.module.css"

interface UserAlbumsProps {
  albums: Album[];
  userId: string;
}

export const UserAlbums = ({ albums, userId }: UserAlbumsProps) => {

  const userAlbums: Album [] = albums.filter((album) => album.userId === parseInt(userId));

  return (
    <div className={classes.album}>
      {userAlbums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
};

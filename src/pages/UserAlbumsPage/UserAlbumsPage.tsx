import { useParams } from "react-router-dom";
import { UserAlbums } from "../../entities/user/ui/UserAlbums/UserAlbums";
import { useGetAlbumsQuery } from "../../entities/album/api/albumsApi";

export const UserAlbumsPage = () => {
  const {id} = useParams()

const {data: albums, isLoading} = useGetAlbumsQuery()

  if (!id) return <div>User not found</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!albums) return <div>Post not found</div>;

  return <UserAlbums albums={albums} userId={id}/>;
};

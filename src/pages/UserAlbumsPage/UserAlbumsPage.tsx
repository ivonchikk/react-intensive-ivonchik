import { useParams } from "react-router-dom";
import { useFetchData } from "../../shared/lib/hooks/useFetchData";
import { useEffect } from "react";
import { UserAlbums } from "../../entities/user/ui/UserAlbums/UserAlbums";
import type { Album } from "../../entities/user/model/interface";

export const UserAlbumsPage = () => {
  const {id} = useParams()
  const url = "https://jsonplaceholder.typicode.com/albums";

  const { data: albums, loading, error, fetchData } = useFetchData<Album[]>();

  useEffect(() => {
    fetchData(url);
  }, [url]);
  
  if (!id) return <div>User not found</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!albums) return <div>Post not found</div>;

  return <UserAlbums albums={albums} userId={id}/>;
};

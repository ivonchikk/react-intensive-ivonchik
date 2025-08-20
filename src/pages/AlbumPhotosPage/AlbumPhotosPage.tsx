import { useParams } from "react-router-dom";

export const AlbumPhotosPage = () => {
  const { id } = useParams();
  return <div>Photos of Album: {id}</div>;
};
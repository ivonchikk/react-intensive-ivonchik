import { useParams } from "react-router-dom";
import { PostCard } from "../../entities/post/ui/PostCard/PostCard";
import { useEffect } from "react";
import type { Post } from "../../entities/post/model/interface";
import { useFetchData } from "../../shared/lib/hooks/useFetchData";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data: post, loading, error, fetchData } = useFetchData<Post>();

  useEffect(() => {
    fetchData(url);
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return <PostCard post={post}></PostCard>;
};

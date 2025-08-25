import { useEffect } from "react";
import { usePosts } from "../../../features/PostList/model/hooks/usePosts";
import { PostList } from "../../../widgets/PostList/PostList";

export const PostsPage = () => {
  const { posts, loading, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return <PostList posts={posts} loading={loading} />;
};

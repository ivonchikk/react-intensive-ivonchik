import { useParams } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { useEffect } from "react";
import { UserPosts } from "../../entities/user/ui/UserPosts/UserPosts";

export const UserPostsPage = () => {
  const { id } = useParams();
  const { posts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!id) return <div>User not found</div>;

  return <UserPosts posts={posts} userId={id} />;
};

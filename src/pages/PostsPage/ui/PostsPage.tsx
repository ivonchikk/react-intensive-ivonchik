import { PostList } from "../../../widgets/PostList/PostList";
import { useGetPostsQuery } from "../../../entities/post/api/postsApi";
import { useAppSelector } from "../../../app/hooks/hooks";
import { selectAllPosts } from "../../../entities/post/model/slice/postSlice";

export const PostsPage = () => {
  const { isLoading } = useGetPostsQuery();

  const posts = useAppSelector((state) => selectAllPosts(state));
  
  return <PostList posts={posts} loading={isLoading} />;
};

import { useParams } from "react-router-dom";
import { UserPosts } from "../../entities/user/ui/UserPosts/UserPosts";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectAllPosts } from "../../entities/post/model/slice/postSlice";

export const UserPostsPage = () => {
  const { id } = useParams();

  useGetPostsQuery()
  const posts = useAppSelector((state) => selectAllPosts(state));

  return <UserPosts posts={posts} userId={id!}/>;
};

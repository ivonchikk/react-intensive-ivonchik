import { useParams } from "react-router-dom";
import { PostCard } from "../../entities/post/ui/PostCard/PostCard";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectPostById } from "../../entities/post/model/slice/postSlice";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import { useGetCommentsByPostIdQuery } from "../../entities/comment/api/commentsApi";

export const PostDetailsPage = () => {
  const { id } = useParams();
  const postId = Number(id);

  const { isLoading } = useGetPostsQuery();
  const post = useAppSelector((state) => selectPostById(state, postId));

  const {data: comments} = useGetCommentsByPostIdQuery(id!)

  if (isLoading) return <div>Loading...</div>;

  return <PostCard post={post} comments={comments}></PostCard>;
};

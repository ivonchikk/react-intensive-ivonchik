import { memo } from "react";
import classes from "./postCard.module.css";
import type { Post } from "../../model/interface";
import { CommentList } from "../../../../widgets/CommentList/ui/CommentList";
import { comments } from "../../mocks/mockComments";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

export const PostCard = memo(({ post }: PostCardProps) => {
  return (
    <div className={classes.postCard}>
      <Link to={`/user/${post.userId}`}><h2>Post owner {post.userId}</h2></Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      {comments && <CommentList comments={comments} />}
    </div>
  );
});

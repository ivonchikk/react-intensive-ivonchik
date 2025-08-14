import { memo } from "react";
import classes from "./postCard.module.css";
import type { Post } from "./interface";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";

interface PostCardProps {
  post: Post;
}

export const PostCard = memo(({ post }: PostCardProps) => {
  return (
    <div className={classes.postCard}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {post.comments && <CommentList comments={post.comments} />}
    </div>
  );
});

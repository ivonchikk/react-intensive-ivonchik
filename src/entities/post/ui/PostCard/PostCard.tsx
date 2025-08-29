import { memo, type FC } from "react";
import classes from "./postCard.module.css";
import type { Post } from "../../model/interface";
import { CommentList } from "../../../../widgets/CommentList/ui/CommentList";
import { Link } from "react-router-dom";
import type { Comment } from "../../../comment/model/interface";

interface PostCardProps {
  post: Post;
  comments?: Comment[];
}

export const PostCard: FC<PostCardProps> = memo(({ post, comments }) => {
  if (!post) return <div>Loading...</div>;

  return (
    <div className={classes.postCard}>
      <Link to={`/user/${post.userId}`}>
        <h2>Post owner {post.userId}</h2>
      </Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      {comments && <CommentList comments={comments} />}
    </div>
  );
});

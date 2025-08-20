import { Link } from "react-router-dom";
import type { Post } from "../../model/interface";
import classes from "./postItem.module.css"

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className={classes.postItem }>
      <Link to={`/posts/${post.id}`} className={classes.postLink}>
        <h3 className={classes.postTitle}>{post.title}</h3>
      </Link>
    </div>
  );
};
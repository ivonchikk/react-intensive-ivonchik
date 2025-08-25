import { useCallback, useMemo, useState } from "react";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import type { Post } from "../../entities/post/model/interface";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter ";
import classes from "./postList.module.css"
import { PostItem } from "../../entities/post/ui/PostItem/PostItem";

const PostListBase = ({ posts }: { posts: Post[] }) => {

  const [minLength, setMinLength] = useState(15);

  const handleChange = useCallback((length: number) => setMinLength(length), []);

  const filteredPosts = useMemo(() => filterByLength(posts, minLength), [posts, minLength]);

  if (!posts.length) return <div>The list is empty</div>;

  return (
    <div className={classes.postList}>
      <PostLengthFilter onChange={handleChange}>{'Filter by title length'}</PostLengthFilter>
      {filteredPosts.map((post) => (<PostItem key={post.id} post={post}/>))}
    </div>
  );
};

export const PostList = withLoading(PostListBase);

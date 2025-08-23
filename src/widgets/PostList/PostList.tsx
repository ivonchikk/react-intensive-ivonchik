import { useCallback, useMemo, useState } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import type { Post } from "../../entities/post/ui/interface";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter ";
import classes from "./postList.module.css";

const PostListBase = ({ posts }: { posts: Post[] }) => {
  const [minLength, setMinLength] = useState(100);

  const handleChange = useCallback((length: number) => setMinLength(length), []);

  const filteredPosts = useMemo(() => filterByLength(posts, minLength), [posts, minLength]);

  if (!posts.length) return <div>The list is empty</div>;
  return (
    <div className={classes.postList}>
      <PostLengthFilter onChange={handleChange}>{"Filter by title length"}</PostLengthFilter>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export const PostList = withLoading(PostListBase);

import type { FC } from "react";
import type { Post } from "../../../post/model/interface";
import { PostCard } from "../../../post/ui/PostCard/PostCard";
import type { Comment } from "../../../comment/model/interface";

interface UserPostsProps {
  posts: Post[];
  userId: string;
  comments?: Comment[]
}

export const UserPosts: FC<UserPostsProps> = ({ posts, userId, comments }) => {
  const userPosts: Post[] = posts.filter((post) => post.userId === parseInt(userId));

  return (
    <div>
      {userPosts.map((post) => (
        <PostCard key={post.id} post={post} comments={comments}/>
      ))}
    </div>
  );
};

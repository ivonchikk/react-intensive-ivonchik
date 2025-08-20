import type { Post } from "../../../post/model/interface";
import { PostCard } from "../../../post/ui/PostCard/PostCard";

export const UserPosts = ({posts, userId}: {posts: Post[], userId: string}) => {
  
    const userPosts: Post[] = posts.filter((post) => post.userId === parseInt(userId));

  return (
    <div>
      {userPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );

}
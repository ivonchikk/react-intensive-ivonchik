import { memo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../entities/post/mocks/mockPosts";


export interface Posts {
  id: number;
  title: string;
  content: string;
}

const PostList = function PostList() {
  const postsList = mockPosts.map((post) => (
    <li key={post.id}>
      <PostCard title={post.title} content={post.content} />
    </li>
  ));

  return (
    <>
      <ul>{postsList}</ul>
    </>
  );
}

export default memo(PostList)
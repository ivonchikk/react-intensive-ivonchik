import { memo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";


interface Posts {
  id: number;
  title: string;
  content: string;
}

const posts: Posts[] = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
  },
];

const PostList = function PostList() {
  const postsList = posts.map((post) => (
    <li key={post.id}>
      <PostCard title={post.title} content={post.content} />
    </li>
  ));

  return (
    <div className="post-list">
      <ul>{postsList}</ul>
    </div>
  );
}

export default memo(PostList)
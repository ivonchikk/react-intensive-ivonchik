import { PostCard } from "../../entities/post/ui/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
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

const Post = ({ id, title, content }: Post) => {
  return (
    <li key={id}>
      <PostCard title={title} content={content} />
    </li>
  );
};

export const PostList = () => {
  if (!posts.length) {
    return <div>The list is empty</div>;
  }

  return (
    <ul className="post-list">
      {posts.map((post) => (<Post {...post} />))}
    </ul>
  );
};

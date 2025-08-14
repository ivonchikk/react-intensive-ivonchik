import { mockPosts } from "../../entities/post/mocks/mockPosts";
import { PostCard } from "../../entities/post/ui/PostCard";

export interface Post {
  id: number;
  title: string;
  content: string;
}

const Post = ({ id, title, content }: Post) => {
  return (
    <li key={id}>
      <PostCard title={title} content={content} />
    </li>
  );
};

export const PostList = () => {
  if (!mockPosts.length) {
    return <div>The list is empty</div>;
  }

  return (
    <ul>
      {mockPosts.map((post) => (<Post {...post} />))}
    </ul>
  );
};

import { memo } from "react";

interface PostCardProps {
  title: string;
  content: string;
}

export const PostCard = memo(function PostCard({ title, content }: PostCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
})

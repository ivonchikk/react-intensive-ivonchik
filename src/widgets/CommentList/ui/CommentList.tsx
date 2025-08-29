import { memo, useCallback, useState } from "react";
import { Button } from "../../../shared/ui/Button/StandardButton/Button";
import classes from "./commentList.module.css"
import type { Comment } from "../../../entities/comment/model/interface";

interface CommentListProps {
    comments: Comment[];
}

export const CommentList = memo(({ comments }: CommentListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleComments = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div>
      <Button className={classes.button} onClick={toggleComments}>
        {isExpanded ? 'Collapse comments' : 'Expand comments'}
      </Button>
      
      {isExpanded && (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
});
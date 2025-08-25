import { memo, useCallback, useState } from "react";
import { Button } from "../../../shared/ui/Button/StandardButton/Button";
import classes from "./commentList.module.css"

interface CommentListProps {
    comments: string[];
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
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
});
import { memo, type ReactNode } from "react";
import classes from "./postLengthFilter.module.css"

interface PostLengthFilterProps {
  value: number;
  onChange: (value: number) => void;
  children: ReactNode;
}

export const PostLengthFilter = memo(({ value, onChange, children }: PostLengthFilterProps) => {
    return(
      <div className={classes.lengthFilter}>
      <label className={classes.label}>{children}</label>
      <input 
      className={classes.input}
      type="number"
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      />
      </div>  
    )
});

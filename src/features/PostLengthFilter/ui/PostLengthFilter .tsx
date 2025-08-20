import { memo, useId, type ReactNode } from "react";
import classes from "./postLengthFilter.module.css";

interface PostLengthFilterProps {
  value: number;
  onChange: (value: number) => void;
  children: ReactNode;
}

export const PostLengthFilter = memo(({ value, onChange, children }: PostLengthFilterProps) => {
  const id = useId();

  return (
    <div className={classes.lengthFilter}>
      <label htmlFor={id} className={classes.label}>
        {children}
      </label>
      <input
        id={id}
        className={classes.input}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
});

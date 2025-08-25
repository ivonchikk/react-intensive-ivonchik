import { memo, useState, type ReactNode } from "react";
import classes from "./postLengthFilter.module.css";
import { Button } from "../../../shared/ui/Button/StandardButton/Button";

interface PostLengthFilterProps {
  onChange: (value: number) => void;
  children: ReactNode;
}

export const PostLengthFilter = memo(({ onChange, children }: PostLengthFilterProps) => {
  const [value, setValue] = useState(100);

  return (
    <div className={classes.lengthFilter}>
      <label className={classes.label}>{children}</label>
      <input
        className={classes.input}
        type="number"
        defaultValue={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Button className={classes.button} onClick={() => onChange(value)}> Apply </Button>
    </div>
  );
});

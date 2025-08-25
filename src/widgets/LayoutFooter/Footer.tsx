import { memo } from "react";
import classes from './footer.module.css'

const Footer = function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Footer component</p>
    </footer>
  );
};
export default memo(Footer);

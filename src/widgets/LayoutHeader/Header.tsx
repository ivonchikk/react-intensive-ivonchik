import { memo, useState } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import classes from "./header.module.css";
import { Modal } from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/StandardButton/Button";


const Header = function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen((prev) => !prev);

  return (
    <header className={classes.header}>
      <p>Header component</p>

      <div className={classes.rightSection}>
        <Button className={classes.button} onClick={openModal}>About</Button>
        <ThemeSwitcher></ThemeSwitcher>
      </div>

      <Modal active={isModalOpen} setActive={openModal}>
        <Modal.Header>{<h3>About the Project</h3>}</Modal.Header>
        <Modal.Body>
          {
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero. Similique
              excepturi exercitationem totam, soluta, tenetur ratione voluptatibus laboriosam ut
              libero ipsa fugit eos explicabo quidem harum repellat voluptatum! Est!
            </p>
          }
        </Modal.Body>
        <Modal.Footer>{<p>Footer</p>}</Modal.Footer>
      </Modal>
    </header>
  );
};

export default memo(Header);

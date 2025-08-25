import { memo, useState } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import classes from "./header.module.css";
import { Button } from "../../shared/ui/Button/StandardButton/Button";
import { ModalAboutProject } from "../../shared/ui/Modal/ModalAboutProject";

const Header = function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {setIsModalOpen(prev => !prev)}

  return (
    <header className={classes.header}>

      <p>Header component</p>

      <div className={classes.rightSection}>
        <Button className={classes.button} onClick={openModal}>About</Button>

        <ModalAboutProject open={isModalOpen}>
          <h3>About the Project</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero. Similique
            excepturi exercitationem totam, soluta, tenetur ratione voluptatibus laboriosam ut
            libero ipsa fugit eos explicabo quidem harum repellat voluptatum! Est!
          </p>
        </ModalAboutProject>
        
        <ThemeSwitcher></ThemeSwitcher>
      </div>

    </header>
  );
};

export default memo(Header);

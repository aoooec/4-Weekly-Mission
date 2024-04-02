import { MouseEventHandler } from "react";
import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
}

const cx = classNames.bind(styles);

const FolderButton = ({ text, onClick, isSelected = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cx("container", { selected: isSelected })}
    >
      <span className={cx("text")}>{text}</span>
    </button>
  );
};

export default FolderButton;

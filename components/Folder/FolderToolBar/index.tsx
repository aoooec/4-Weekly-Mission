import styles from "./FolderToolbar.module.scss";
import FolderList from "../FolderList";

const FolderToolBar = () => {
  return (
    <div className={styles.container}>
      <FolderList />
    </div>
  );
};

export default FolderToolBar;

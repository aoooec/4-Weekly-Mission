import styles from "./FolderList.module.scss";
import AddIcon from "@/public/images/icons/add.svg";
import FolderButton from "../FolderButton";
import { useFolder } from "@/hooks/useFolderContext";

const FolderList = () => {
  /*
   * 버튼 클릭시 sort 및 select 상태 변경되도록 로직 추가해야함
   * folder button List / 하단 folder edit 부분 별도 컴포넌트로 분리
   * 폴더 제목 부분을 folder edit부분으로 넘겨준다
   * 폴더 추가 -> request 후 응답에 따라 setFolders로 바로 추가
   */
  const { folders, setFolders } = useFolder();
  return (
    <div className={styles.container}>
      <div className={styles.buttonList}>
        <FolderButton text="전체" onClick={() => {}} isSelected={true} />
        {folders.map((folder) => {
          return (
            <FolderButton
              key={folder.id}
              text={folder.name}
              onClick={() => {}}
              isSelected={false}
            />
          );
        })}
      </div>
      <button className={styles.addBtn}>
        <span className={styles.text}>폴더 추가</span>
        <AddIcon />
      </button>
    </div>
  );
};

export default FolderList;

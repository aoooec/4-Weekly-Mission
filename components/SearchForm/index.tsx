import styles from "./SearchForm.module.scss";
import SearchIcon from "@/public/images/icons/search.svg";
import CloseIcon from "@/public/images/icons/close.svg";
import { ChangeEventHandler, useState } from "react";

const SearchForm = () => {
  // 검색 관련 훅으로 변경할 것
  // 버튼, 상태 관리 관련 로직 추가
  const [value, setValue] = useState("");
  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value);
  };

  return (
    <form className={styles.container}>
      <SearchIcon
        className={
          value ? `${styles.searchIcon} ${styles.isChange}` : styles.searchIcon
        }
      />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      {value && (
        <button className={styles.closeBtn}>
          <CloseIcon className={styles.closeIcon} viewBox="0 0 24 24" />
        </button>
      )}
    </form>
  );
};

export default SearchForm;

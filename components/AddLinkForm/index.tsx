import { useState } from "react";
import styles from "./AddLinkForm.module.scss";
import LinkIcon from "@/public/images/icons/link.svg";
import LinkbraryButton from "../LinkbraryButton";

export default function AddLinkForm() {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.linkForm} onSubmit={onSubmit}>
        <LinkIcon className={styles.icon} viewBox="0 0 20 20" />
        <input
          onChange={onChange}
          value={value}
          className={styles.input}
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <LinkbraryButton buttonType="submit" className={styles.addLinkBtn}>
          추가하기
        </LinkbraryButton>
      </form>
    </div>
  );
}

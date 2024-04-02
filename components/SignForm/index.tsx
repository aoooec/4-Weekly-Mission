import Input from "../Input/DefaultInput";
import PasswordInput from "../Input/PasswordInput";
import styles from "./SignForm.module.scss";

const SignForm = () => {
  // react hooks form 라이브러리 사용?
  // labelInputItem으로 컴포넌트화해서 정리?
  // validation 관련
  const onSubmit = () => {};
  const error = "error";
  return (
    <form onSubmit={onSubmit}>
      <label className={styles.formItem}>
        <span className={styles.label}>이메일</span>
        <div className={styles.inputContainer}>
          <Input type="email" name="email" placeholder="codeit@codeit.com" />
          {error && (
            <span className={styles.error}>이메일을 확인해주세요.</span>
          )}
        </div>
      </label>
      <label className={styles.formItem}>
        <span className={styles.label}>비밀번호</span>
        <div className={styles.inputContainer}>
          <PasswordInput name="password" placeholder="Password" />
          {error && <span className={styles.error}>error</span>}
        </div>
      </label>
      <label className={styles.formItem}>
        <span className={styles.label}>비밀번호 확인</span>
        <div className={styles.inputContainer}>
          <PasswordInput name="matchPassword" placeholder="Confirm password" />
          {error && <span className={styles.error}>error</span>}
        </div>
      </label>
    </form>
  );
};

export default SignForm;

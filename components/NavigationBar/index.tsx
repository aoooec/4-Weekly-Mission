import Image from "next/image";
import styles from "./NavigationBar.module.scss";
import Link from "next/link";
import LinkbraryButton from "../LinkbraryButton";

export default function NavigationBar() {
  const userData = null;

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <h1 className={styles.logo}>
            <Image priority src="/images/logo.svg" fill alt="Linkbrary" />
          </h1>
        </Link>
        {userData ? (
          "유저 프로필"
        ) : (
          <Link href="/">
            <LinkbraryButton buttonType="link" className={styles.loginBtn}>
              로그인
            </LinkbraryButton>
          </Link>
        )}
      </div>
    </nav>
  );
}

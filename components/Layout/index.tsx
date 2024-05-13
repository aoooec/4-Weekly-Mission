import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import NavigationBar from "../NavigationBar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

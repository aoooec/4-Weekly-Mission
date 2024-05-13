import { ReactNode } from "react";
import styles from "./LinkbraryButton.module.scss";

interface Props {
  children: ReactNode;
  buttonType: "submit" | "button" | "link";
  className: any;
}

export default function LinkbraryButton({
  children,
  buttonType,
  className,
}: Props) {
  let buttonEl;

  switch (buttonType) {
    case "submit":
      buttonEl = (
        <button type="submit" className={`${styles.button} ${className}`}>
          {children}
        </button>
      );
      break;
    case "button":
      buttonEl = (
        <button type="button" className={`${styles.button} ${className}`}>
          {children}
        </button>
      );
      break;
    case "link":
      buttonEl = (
        <div className={`${styles.button} ${className}`}>{children}</div>
      );
  }

  return buttonEl;
}

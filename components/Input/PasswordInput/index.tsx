import { useState } from "react";
import styles from "./PasswordInput.module.scss";
import EyeOnIcon from "@/public/images/icons/eye-on.svg";
import EyeOffIcon from "@/public/images/icons/eye-off.svg";
import Input from "../DefaultInput";

interface Props {
  name: string;
  placeholder: string;
}

const PasswordInput = ({ name, placeholder }: Props) => {
  const [isVisible, setVisible] = useState(false);

  const handleContentVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Input
        type={isVisible ? "text" : "password"}
        name={name}
        placeholder={placeholder}
      />
      <button className={styles.button} onClick={handleContentVisible}>
        {isVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;

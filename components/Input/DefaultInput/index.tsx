import styled from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styled);

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  isInvalid?: boolean;
}

const Input = ({ type, name, placeholder, isInvalid }: InputProps) => {
  return (
    <input
      className={cx("input", { isInvalid: "invalid" })}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;

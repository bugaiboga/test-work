import { ChangeEventHandler } from "react";

interface InputProps {
  text: string;
  type?: "email" | "number" | "text";
  value: string | undefined | number;
  error: boolean;
  onChange: ChangeEventHandler | undefined;
}

export const Input = ({
  text,
  type = "text",
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <label className="input__wrapper">
      <p className="input__text">{text}</p>
      <input
        className={`input ${error ? "" : "input__error"}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

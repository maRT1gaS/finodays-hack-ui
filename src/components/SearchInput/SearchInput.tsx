import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchInput.module.css";
import { Sort } from "../Sort/Sort";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        placeholder="Введите параметры поиска"
        onChange={onChangeInput}
        className={classes.input}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className={`${classes.input_icon} ${classes.sort}`}
        onClick={() => setOpen(!open)}
      >
        <path
          d="M36.6666 5H3.33325L16.6666 20.7667V31.6667L23.3333 35V20.7667L36.6666 5Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className={`${classes.input_icon} ${classes.search}`}
      >
        <path
          d="M18.3333 31.6667C25.6971 31.6667 31.6667 25.6971 31.6667 18.3333C31.6667 10.9695 25.6971 5 18.3333 5C10.9695 5 5 10.9695 5 18.3333C5 25.6971 10.9695 31.6667 18.3333 31.6667Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 35L27.75 27.75"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Sort open={open} setOpen={setOpen} />
    </div>
  );
};

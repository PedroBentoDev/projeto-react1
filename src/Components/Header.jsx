import style from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={style.header}>
      <h1>{title}</h1>
    </header>
  );
}

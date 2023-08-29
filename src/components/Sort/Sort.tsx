import classes from "./Sort.module.css";

interface ISortProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Sort = ({ open, setOpen }: ISortProps) => {
  return (
    <div
      className={
        open
          ? `${classes.popup} ${classes.open}`
          : `${classes.popup} ${classes.none}`
      }
      onClick={() => setOpen(false)}
    >
      <ul>
        <li>Стоит ли ЦФА на продаже</li>
        <li>Время начала выпуска ЦФА</li>
        <li>Время конца выпуска ЦФА</li>
        <li>Только выпущенные ЦФА</li>
        <li>Только проверенные ЦФА</li>
      </ul>
    </div>
  );
};

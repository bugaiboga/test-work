import { MouseEventHandler } from "react";

interface SidebarSortProps {
  sortUsersByName: undefined | MouseEventHandler<HTMLButtonElement>;
  sortUsersByCity: undefined | MouseEventHandler<HTMLButtonElement>;
}

export const SidebarSort = ({
  sortUsersByName,
  sortUsersByCity,
}: SidebarSortProps) => {
  return (
    <div className="sidebar">
      <h5 className="sidebar__title">Сортировка</h5>
      <button className="btn" onClick={sortUsersByCity}>
        по городу
      </button>
      <button className="btn" onClick={sortUsersByName}>
        по имени
      </button>
    </div>
  );
};

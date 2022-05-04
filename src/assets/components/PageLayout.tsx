import { MouseEventHandler } from "react";
import { Outlet } from "react-router-dom";

import { SidebarSort } from "./SidebarSort/SidebarSort";

interface PageLayoutProps {
  sortUsersByName: undefined | MouseEventHandler<HTMLButtonElement>;
  sortUsersByCity: undefined | MouseEventHandler<HTMLButtonElement>;
}

export const PageLayout = ({
  sortUsersByName,
  sortUsersByCity,
}: PageLayoutProps) => {
  return (
    <main className="main">
      <SidebarSort
        sortUsersByName={sortUsersByName}
        sortUsersByCity={sortUsersByCity}
      />
      <Outlet />
    </main>
  );
};

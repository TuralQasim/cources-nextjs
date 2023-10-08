import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

type SunMenusItem = {
  link: string;
  title: string;
};
type MenuDataItem = {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus: SunMenusItem[];
};
const NavMenu: React.FC = () => {
  return (
    <>
      <ul>
        {menu_data.map((item: MenuDataItem) => (
          <li key={item.id} className="has-dropdown">
            <Link href={item.link}>{item.title}</Link>
            <ul className="submenu">
              {item.sub_menus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;

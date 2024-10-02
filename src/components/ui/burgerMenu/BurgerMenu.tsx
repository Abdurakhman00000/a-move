import React from "react";
import scss from "./BurgerMenu.module.scss";
import { links } from "@/constants/links";
import Link from "next/link";
import { useHeaderStore } from "@/store/useHeaderStore";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";


const BurgerMenu = () => {
  const { isOpen } = useHeaderStore();
  const { data: session } = useSession();

  return (
    <section
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={scss.auth}>
          {session ? (
            <div className={scss.trueAuth}>
              <img src={session.user?.image!} alt="" />
              <p>{session.user?.name}</p>
              <button  onClick={() => signOut()}>Logout</button>
            </div>
          ) : (
            <div className={scss.falseAuth}>
              <FaUserCircle />
            <button onClick={() => signIn('google')}>Войти</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;

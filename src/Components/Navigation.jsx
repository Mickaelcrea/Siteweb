import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
import { useEffect } from "react";

export function Navigation() {
  useEffect(() => {
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const main = document.getElementsByTagName("main")[0];

    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;
    main.onclick = closeNav;

    

    /* Set the width of the side navigation to 250px */
    function openNav() {
      sidenav.classList.add(styles.sidenavactive);
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
      sidenav.classList.remove(styles.sidenavactive);
    }
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.fullpage_menu}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="#" alt="" />
            Mickael.crea
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </div>
      <div className={styles.menuburger}>
        <div id="mySidenav" className={styles.sidenav}>
          <a id="closeBtn" href="#" className={styles.close}>×</a>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/apropos">A propos</Link>
          </ul>
        </div>

        <a href="#" id="openBtn">
          <span className={styles.burgericon}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
      </div>
    </nav>
  );
}

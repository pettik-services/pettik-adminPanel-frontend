import styles from "../../styles/SideNavbar.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import "font-awesome/css/font-awesome.min.css";
import { Row, Col, NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const SideNavbar = () => {
  const router = useRouter();
  const grooServ = () => {
    router.push("grooming-services");
  };
  const appServ = () => {
    router.push("application-grooming");
  };
  return (
    <div>
      <div className={styles.sidenav}>
        <p className={styles.logo}>
          <span>PETTIK</span>-ADMIN
        </p>

        <Link href="/user" className={styles.icona}>
          <i className="fa fa-users icons"></i>&nbsp;&nbsp;USER LIST
        </Link>
        <Link href="#" className={styles.icona}>
          <i className="fa fa-users icons"></i>&nbsp;&nbsp;VACCINATIONS
        </Link>
        <div className={styles.iconadropdown}>
          <ul  className={styles.navul}>
            <li>
              <i className="fa fa-users icons"></i>&nbsp;&nbsp;GROOMING&nbsp;&nbsp;
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/grooming-services" className={styles.navli}>GROMMING SERVICES</Link>
                </li>
                <li>
                  <Link href="/application-grooming" className={styles.navli}>GROMMING PLANS</Link>
                </li>
              </ul>
            </li>
          </ul>
         
        </div>
        <Link href="#" className={styles.icona}>
          <i className="fa fa-users icons"></i>&nbsp;&nbsp;APPOINTMENTS
        </Link>
        <Link href="/blogs" className={styles.icona}>
          <i className="fa fa-users icons"></i>&nbsp;&nbsp;BLOGS
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;

import React from 'react'
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { AiOutlineShopping } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };


 
  return (
    <div className={styles.container}>
      <div className={styles.menubarr}>
      <TfiMenu  className={styles.menubar} onClick={handleMenuClick}/>
      <ul className={`${styles.menu} ${showMenu ? styles.showMenu : ''}`}>
  <li>Collection</li>
  <li>Brands</li>
  <li>New</li>
  <li>Sales</li>
  <li>ENG</li>
</ul>
      </div>
<div className={styles.logo}>
  <img src={logo} alt="logo1" />
  <span>Amazon</span>
</div>
<div className={styles.right}>
<div className={styles.menu} >
<ul className={styles.menu}>
  <li>Collection</li>
  <li>Brands</li>
  <li>New</li>
  <li>Sales</li>
  <li>ENG</li>
</ul>
</div>
<input type="text" placeholder='Search' className={styles.search}/>
<AiOutlineShopping  className={styles.cart} />
</div>
    </div>

  )
}

export default Header
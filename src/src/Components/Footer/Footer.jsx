import React from 'react'
import Logo from '../../assets/logo.png'
import css from './Footer.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { GoLink } from "react-icons/go";
const Footer = () => {
  return (
 <div className={css.cFooterWrapper}>
  <hr />
  <div className={css.cFooter}>
<div className={css.logo}>
  <img src={Logo} alt="" />
<span>Amazon</span>
</div>
<div className={css.block}>
<div className={css.detail}>
  <span>Contact us</span>
  <span className={css.pngline}>
  <IoLocationOutline className={css.icon} />
 <span>111 north avenue Orlando FL 32801</span>
  </span>
<span className={css.pngline}>
< BsTelephone className={css.icon}/>
<a href="tel:352-306-4415">352-306-4415</a>
</span>
<span className={css.pngline}>
  <IoMailOutline className={css.icon}/>
  <a href="mailto:support@amazon.com">support@amaon.com</a>
</span>
</div>
</div>
<div className={css.block}>
  <div className={css.detail}>
    <span>Account</span>
<span className={css.pngline}>
  <GoSignIn className={css.icon}/>
  Sign In
</span>
  </div>
</div>
<div className={css.block}>
  <div className={css.detail}>
    <span>Company</span>
<span className={css.pngline}>
  < GoPeople className={css.icon}/>
  About us
</span>
  </div>
</div>
<div className={css.block}>
  <div className={css.detail}>
    <span>Resources</span>
<span className={css.pngline}>
  < GoLink className={css.icon}/>
Safety Privacy and Terms
</span>
  </div>
</div>
  </div>
  <div className={css.copyrights}>
    <span>Copyright @2022 by Amazon, Inc </span>
    <span>All rights reserved.</span>
  </div>
 </div>
  )
}


export default Footer
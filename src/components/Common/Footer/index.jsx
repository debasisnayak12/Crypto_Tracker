import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./styles.css";

const Footer = () => {
  return (
    <div className='footer-flex'>
      <p>CryptoTracker.</p>
      <div className='footer-icons'>
        <FacebookIcon/>
        <EmailIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
      </div>
    </div>
  )
}

export default Footer
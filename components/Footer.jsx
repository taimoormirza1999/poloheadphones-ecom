import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>{currentYear} Polo Headphones All rights reserverd Website Designer By </p>
      <Link href="https://taimoor-hamza-fullstack-developer.vercel.app/">Taimoor Hamza</Link>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
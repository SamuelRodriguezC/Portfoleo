import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const socials = [
  { icon: <FaGithub/>, path: "" },
  { icon: <FaLinkedin/>, path: "" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
        ))}
      
    </div>
  )
}

export default Social



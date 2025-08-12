import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const socials = [
  { icon: <FaGithub/>, path: "https://github.com/SamuelRodriguezC"},
  { icon: <FaLinkedin/>, path: "https://linkedin.com/in/samuelrc25" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}  target="_blank" rel="noopener noreferrer" >{social.icon}</Link>
        ))}
      
    </div>
  )
}

export default Social



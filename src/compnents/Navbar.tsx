"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Menu, X } from "lucide-react"
import styles from "@/styles/Navbar.module.scss"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)
    
    // Update window width when resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      // Close mobile menu if screen is resized larger than mobile breakpoint
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span><img src="/Navbar/Logo.png" alt="Logo" /></span>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/features" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/faq" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <Link href="/download" className={styles.ctaButton}>
            Get The App Now
            <ChevronRight className={styles.ctaIcon} size={16} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
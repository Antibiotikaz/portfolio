import styles from '../../styles/navigation.module.scss'

export default function navigation() {
    return (
      <div className={styles.containerNavigation}>
        {/* NAVIGATION */}
        <div className={styles.navContainer}>

        
        <nav>
            <h1>Nitro<span className={styles.point}>.</span></h1>
          
        <ul>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Services</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
        </ul>
        </nav>
        
        </div>
            {/* HERO BANNER */}
        <div className={styles.heroBanner}>
          <div></div>
          <h1>WELCOME</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
          <button>Get In Touch</button>
         
        </div >
        <div className={styles.heroButton}>
        <a><span className={styles.mouseIcon}>ssss</span></a>
        </div>
      </div>
    )
  }
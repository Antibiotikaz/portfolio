import styles from '../../styles/aboutUs.module.scss'

export default function ourFeatures() {
    return (
      <div className={styles.aboutUsContainer}>
        <h1>About Us</h1>
        <div className={styles.contentBox}>
            <img src="hero_1.jpg" alt=""/>
            <div className={styles.textBox}>
                <h2>For the next great business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
                <ul>
                    <li><span className="icon-checkmark"></span>Officia quaerat eaque neque</li>
                    <li><span className="icon-checkmark"></span>Possimus aut consequuntur incidunt</li>
                    <li><span className="icon-checkmark"></span>Lorem ipsum dolor sit amet</li>
                    <li><span className="icon-checkmark"></span>Consectetur adipisicing elit</li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
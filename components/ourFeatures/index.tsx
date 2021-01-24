import styles from '../../styles/ourFeatures.module.scss'

export default function ourFeatures() {
    return (
      <div className={styles.featuresContainer}>
        <h1>Our Features</h1>
        <p className={styles.UnderTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
        <div className={styles.contentBox}>
            <img src="slide_4.jpg" alt=""/>
            <div className={styles.textBox}>
                <h2>4 Our Dedicated Professionals</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
                <button>Learn More</button>
            </div>
        </div>
      </div>
    )
  }
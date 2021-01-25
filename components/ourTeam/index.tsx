import styles from '../../styles/ourTeam.module.scss'

export default function ourTeam() {
    return (
      <div className={styles.teamContainer}>
        <div className={styles.contentCenter}>
          <h1>Our Team</h1>
          <p className={styles.UnderTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.teamBox}>
            <img src="https:preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            <div className={styles.teamNames}>
              <h3>Kaiara Spencer</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_6.jpg"/>
            <div className={styles.teamNames}>
              <h3>Dave Simpson</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_7.jpg"/>
            <div className={styles.teamNames}>
              <h3>Ben Thompson</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_8.jpg"/>
            <div className={styles.teamNames}>
              <h3>Kyla Stewart</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_1.jpg"/>
            <div className={styles.teamNames}>
              <h3>Kaiara Spencer</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_2.jpg"/>
            <div className={styles.teamNames}>
              <h3>Dave Simpson</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_3.jpg"/>
            <div className={styles.teamNames}>
              <h3>Ben Thompson</h3>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_4.jpg"/>
            <div className={styles.teamNames}>
              <h3>Chris Stewart</h3>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

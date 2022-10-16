import styles from './Profile.module.css'
import HeaderBg from '../../assets/bg-header.png'
import { ProfileBody } from '../ProfileBody'


export const Profile = () => {
    return (
        <section className={styles.profile}>
            <img src={HeaderBg} className={styles.header} />

            <img className={styles.avatar} src="https://github.com/gustavosalviato.png" />


            <ProfileBody />
        </section>
    )
}
import styles from './Profile.module.css'
import HeaderBg from '../assets/bg-header.png'
import { User } from '../User'
import { ProfileBody } from '../ProfileBody'


export const Profile = () => {
    return (
        <section className={styles.profile}>
            <img src={HeaderBg} className={styles.header} />
            <User />
            <ProfileBody />
        </section>
    )
}
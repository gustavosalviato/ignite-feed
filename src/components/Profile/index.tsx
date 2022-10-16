import styles from './Profile.module.css'
import HeaderBg from '../../assets/bg-header.png'
import { ProfileBody } from '../ProfileBody'
import { Avatar } from '../Avatar'


export const Profile = () => {
    return (
        <section className={styles.profile}>

            <img src={HeaderBg} className={styles.header} />


            <Avatar
                src="https://github.com/gustavosalviato.png"
                hasMargin
            />

            <ProfileBody />
        </section>
    )
}
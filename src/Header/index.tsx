import styles from './Header.module.css'
import Logo from '../assets/logo.png'
export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="" />
            <h1>Ignite Feed</h1>
        </header>

    )
}
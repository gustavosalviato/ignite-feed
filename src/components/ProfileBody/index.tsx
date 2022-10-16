import styles from './ProfileBody.module.css'
import { PencilSimple } from 'phosphor-react'
export const ProfileBody = () => {

    return (
        <div className={styles.profileBody}>
            <h2>Gustavo Henrique</h2>

            <span>Desenvolvedor Front-End</span>
            <button
            >
                <PencilSimple />
                Editar seu perfil
            </button>

        </div>
    )
}
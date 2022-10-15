import styles from './ProfileBody.module.css'
import { PencilSimpleLine } from 'phosphor-react'
export const ProfileBody = () => {
    return (
        <div className={styles.profileBody}>
            <h2>Alexander</h2>

            <span>UI Designer</span>

            <button>
                <PencilSimpleLine />
                Editar seu perfil
            </button>

        </div>
    )
}
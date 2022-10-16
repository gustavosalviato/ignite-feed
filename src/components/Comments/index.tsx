import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comments.module.css'

export const Comments = () => {
    return (
        <div className={styles.comments}>

            <Avatar
                src="https://github.com/gustavosalviato.png"
                hasMargin={false}
                hasBorder={false}
            />


            <div className={styles.containerBox}>
                <div className={styles.commentBox}>
                    <header className={styles.commentBoxHeader}>
                        <div className={styles.userAndTime}>
                            <strong>Devon Lane</strong>
                            <span>Cerca de 2 horas atrás</span>
                        </div>


                        <button>
                            <Trash />
                        </button>


                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>

                <div className={styles.footer}>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir
                    </button>


                    <span>03</span>
                </div>

            </div>
        </div >
    )
}
import { parseWithOptions } from 'date-fns/fp'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comments.module.css'

export const Comments = (props) => {
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


                        <button
                            onClick={() => props.onDeleteComment(props.comment)}
                            title="Excluir comentário"
                        >
                            <Trash />
                        </button>


                    </header>

                    <p>{props.comment}</p>

                </div>

                <div className={styles.footer} title="Aplaudir">
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir
                    </button>


                    <span title='Comentários'>03</span>
                </div>

            </div>
        </div >
    )
}
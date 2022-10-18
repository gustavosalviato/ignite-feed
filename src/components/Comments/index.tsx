import { parseWithOptions } from 'date-fns/fp'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './Comments.module.css'

interface CommentsProps {
    comment: string
    onDeleteComment: (commentToDelete: string) => void
}

export const Comments = ({ comment, onDeleteComment }: CommentsProps) => {

    const [likeCount, setLikeCount] = useState(0)

    const handleLikeCount = () => {
        setLikeCount(() => {
            return likeCount + 1
        })
    }

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
                            onClick={() => onDeleteComment(comment)}
                            title="Excluir comentário"
                        >
                            <Trash />
                        </button>


                    </header>

                    <p>{comment}</p>

                </div>

                <div className={styles.footer} title="Aplaudir">
                    <button
                        onClick={handleLikeCount}
                    >
                        <ThumbsUp size={20} />
                        Aplaudir

                        <span title='Comentários'>{likeCount}</span>
                    </button>



                </div>

            </div>
        </div >
    )
}
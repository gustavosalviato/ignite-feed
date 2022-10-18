import { Avatar } from '../Avatar'
import { Comments } from '../Comments'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from 'react'

export const Post = (props) => {

    const [comments, setComments] = useState(['TESTE'])
    const [newComment, setNewComment] = useState('')

    const isNewCommentEmpty = newComment.length === 0

    const publishedAtFormatedd = format(props.post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR

    })

    const publishedAtRelativeToNow = formatDistanceToNow(props.post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setNewComment('')
        setComments([...comments, newComment])

    }

    const handleChange = (e) => {
        e.target.setCustomValidity('')
        setNewComment(e.target.value)
    }

    const handleDeleteComment = (commentToDelete: string) => {
        const newComments = comments.filter((comment) => comment !== commentToDelete)

        setComments(newComments)
    }

    const handleInvalidTextArea = (e) => {
        e.target.setCustomValidity('Esse campo é obrigatório')
    }

    return (
        <article className={styles.post}>
            <div className={styles.leftArea}>

                <Avatar
                    src={props.post.author.avatarUrl}

                />

                <div className={styles.leftAreaInfo}>
                    <h3>{props.post.author.name}</h3>
                    <span>{props.post.author.role}</span>
                </div>


                <time title={publishedAtFormatedd} dateTime='16-10-2022 23:00:00'>
                    {publishedAtRelativeToNow}
                </time>
            </div>


            <div className={styles.body}>
                {props.post.content.map((content) => {
                    if (content.type === 'paragraph') {
                        return <p
                            key={content.content}
                        >
                            {content.content}
                        </p>
                    } else {
                        return <p
                            key={content.content
                            }>
                            <a href="#">
                                {content.content}
                            </a>
                        </p>
                    }
                })}

            </div>

            <form
                onSubmit={handleSubmit}
                className={styles.formContainer}
            >
                <strong>Deixe seu feeback</strong>

                <textarea
                    placeholder='Escreva um comentário...'
                    value={newComment}
                    onChange={handleChange}
                    onInvalid={handleInvalidTextArea}
                    required
                />

                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comments
                        key={comment}
                        comment={comment}
                        onDeleteComment={handleDeleteComment}
                    />
                ))}

            </div>

        </article >
    )
}
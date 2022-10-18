import { Avatar } from '../Avatar'
import { Comments } from '../Comments'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: Author
    publishedAt: Date
    content: Content[]
}

export const Post = ({ author, publishedAt, content }: PostProps) => {

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const isNewCommentEmpty = newComment.length === 0

    const publishedAtFormatedd = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR

    })

    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setNewComment('')
        setComments([...comments, newComment])

    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    const handleDeleteComment = (commentToDelete: string) => {
        const newComments = comments.filter((comment) => comment !== commentToDelete)

        setComments(newComments)
    }

    const handleInvalidTextArea = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    return (
        <article className={styles.post}>
            <div className={styles.leftArea}>

                <Avatar
                    src={author.avatarUrl}
                />

                <div className={styles.leftAreaInfo}>
                    <h3>{author.name}</h3>
                    <span>{author.role}</span>
                </div>


                <time title={publishedAtFormatedd} dateTime='16-10-2022 23:00:00'>
                    {publishedAtRelativeToNow}
                </time>
            </div>


            <div className={styles.body}>
                {content.map((content) => {
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
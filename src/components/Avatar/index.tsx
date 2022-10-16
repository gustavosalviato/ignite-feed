import styles from './Avatar.module.css'

interface AvatarProps {
    src: string
    hasBorder?: boolean
    hasMargin?: boolean
}

export const Avatar = ({ src, hasBorder = true, hasMargin }: AvatarProps) => {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            style={{
                margin: hasMargin ? '0 auto' : '0',
                marginTop: hasMargin ? 'calc(-4.5rem / 2)' : '0',
                marginBottom: hasMargin ? '1rem' : '0',
            }}

        />
    )
}

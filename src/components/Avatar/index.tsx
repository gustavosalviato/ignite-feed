import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean
    hasMargin?: boolean
}

export const Avatar = ({ hasBorder = true, hasMargin, ...props }: AvatarProps) => {
    return (
        <img
            {...props}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            style={
                {
                    margin: hasMargin ? '0 auto' : '0',
                    marginTop: hasMargin ? 'calc(-4.5rem / 2)' : '0',

                    marginBottom: hasMargin ? '1rem' : '0',
                }
            }


        />
    )
}

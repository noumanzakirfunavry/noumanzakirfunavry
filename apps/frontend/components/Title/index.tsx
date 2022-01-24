/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { TitleProps } from "apps/frontend/types/Types"
import { FC } from "react"

const Title:FC<TitleProps> = ({text, position, styles}) => {
    return (
        <>
            <div className={styles}>
                <h2>{text}</h2>
            </div>
        </>
    )
}

export default Title
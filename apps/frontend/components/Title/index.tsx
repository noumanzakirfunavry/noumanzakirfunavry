/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { TitleProps } from "apps/frontend/types/Types"
import { FC } from "react"

const Title:FC<TitleProps> = ({styles, children}) => {
    return (
        <>
            <div className={styles}>
                {children}
            </div>
        </>
    )
}

export default Title
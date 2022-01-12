import { SideBannerProps } from "apps/frontend/types/Types"
import { FC } from "react"

const SideBanner:FC<SideBannerProps> = ({size}) =>{
    return (
        <>
            {
                size === 'Small' && (
                    <>Small Banner</>
                )
            }
            {
                size === 'Large' && (
                    <>Large Banner</>
                )
            }
        </>
    )
}

export default SideBanner
import { SideBannerProps } from "apps/frontend/types/Types"
import smallBanner from "apps/frontend/styles/images/small-ad.jpg";
import styles from "./sidebanner.module.css";
import { FC } from "react"

const SideBanner:FC<SideBannerProps> = ({size}) =>{
    return (
        <>
        <div className={styles.sidebarBanner}>
            {
                size === 'Small' && (
                    <>
                        <div className={styles.smallBanner}>
                            <img src={smallBanner.src} />
                        </div>
                    </>
                )
            }
            {
                size === 'Large' && (
                    <>Large Banner</>
                )
            }
        </div>
        </>
    )
}

export default SideBanner
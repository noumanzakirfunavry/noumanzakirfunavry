import { SideBannerProps } from "apps/frontend/types/Types"
import smallBanner from "apps/frontend/styles/images/small-ad.jpg";
import largebanner from "apps/frontend/styles/images/ad-height.jpg";
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
                            <img className="img-fluid" src={smallBanner.src} />
                        </div>
                    </>
                )
            }
            {
                size === 'Large' && (
                    <>
                    <div className={styles.largeBanner}>
                            <img className="img-fluid" src={largebanner.src} />
                        </div>
                    </>
                )
            }
        </div>
        </>
    )
}

export default SideBanner
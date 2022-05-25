import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const SkeletonLoader = (props) => {

  const containerClassName = props?.containerClassName ? props?.containerClassName : ''
  const count = props?.count ? props?.count : 1

    const [displayLoader, setDisplayLoader] = useState<boolean>(true)

    useEffect(()=>{
       setTimeout(()=>{
        setDisplayLoader(false)
       }, 2000)

       return () => {
        setDisplayLoader(false); 
      };
    }, [])
    return (
        <>
          {displayLoader && 
                <Skeleton containerClassName={containerClassName} count={count} />
        }
        </>
    )
}
export default SkeletonLoader
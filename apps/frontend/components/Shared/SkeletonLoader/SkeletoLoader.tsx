import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const SkeletonLoader = () => {

    const [displayLoader, setDisplayLoader] = useState<boolean>(true)

    useEffect(()=>{
       setTimeout(()=>{
        setDisplayLoader(false)
       }, 5000)

       return () => {
        setDisplayLoader(false); 
      };
    }, [])
    return (
        <>
          {displayLoader && <Skeleton/>}
        </>
    )
}
export default SkeletonLoader
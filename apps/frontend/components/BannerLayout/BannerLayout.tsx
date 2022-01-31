/* eslint-disable @typescript-eslint/no-empty-function */
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import ad from '../../styles/images/ad-970.jpg';

const   BannerLayout:FC = () =>{

    const path = useRouter()
    const pathName = path.pathname
    useEffect(()=>{
    
        console.log(pathName)
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathName])
    
    return (
        <>
            <div className="text-center mb-4">
                <img className="img-fluid" src={ad.src} />
            </div>
        </>
    )
}

export default BannerLayout
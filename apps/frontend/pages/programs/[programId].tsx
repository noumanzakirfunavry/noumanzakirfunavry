/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import ProgramDetails from "apps/frontend/components/Programs/detials"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
// import CategoryNewsSection from "apps/frontend/components/Shared/CategoryNews"
import DummyCategoryNewsSection from "apps/frontend/components/Shared/DummyCategoryNews"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GetData from '../../services/GetData';
import { requests } from '../../services/Requests';
import RecordNotFound from '../../components/Shared/RecordNotFound/RecordNotFound';

const Index = () => {

    const router = useRouter();
    const [programDetails, setProgramDetails] = useState<any>({})

    useEffect(() => {
        if(router.query.programId){
            GetData(`${requests.programById}/${router.query.programId}`, {}, 'get', false).then(res => {
            setProgramDetails(res?.data?.response?.program);
        
            }).catch(err => {
            console.warn(err)
            })
        }
      }, [router.query.programId]);

    return (
        programDetails ?
        <>
            <div className="container">
                <AdBanner />
            </div>
            <Title styles="pageTitle PageTitleYellow mb-0"><h2>{programDetails?.title}</h2></Title>
            <ProgramDetails programDetails={programDetails} />
            <div className="container">
                <div className='PageBuilder-pageRow'>
                    <div className='PageBuilder-col-9'>
                        <Title styles="yellowTitle mb-4"><h3>الحلقات اكسبو في أسبوع</h3></Title>
                        <DummyCategoryNewsSection limit={8} displayMoreButton={true} displayTopTwoNews={false} displayTitle={false} />
                    </div>
                    <div className='PageBuilder-sidebar pt_0'>
                        <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 1 }]} />
                    </div>
                </div>
            </div>
        </>
        :
        <RecordNotFound />
    )
}

export default Index
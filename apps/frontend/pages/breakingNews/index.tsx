/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import NewsList from "apps/frontend/components/BreakingNews/NewsList/NewsList"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"
import { RootState } from "apps/frontend/reducers/Reducer"
import { GetMetaData } from "apps/frontend/services/StaticData"
import Head from "next/head"
import { useSelector } from "react-redux"

const Index = ({data}) =>{

    const user = useSelector((state:RootState)=>{
        return state.user
    })

    console.log(user)

    return (
        <>
            <Head>
                <meta name="description" content={data?.description} />
                <meta name="title" content={data?.title} />

                <meta name="theme-color" content="#000000" />

                <meta name="og:description" content={data?.og?.description} />
                <meta name="og:title" content={data.og?.title} />

                <meta name="twitter:description" content={data?.twitter?.description} />
                <meta name="twitter:title" content={data.twitter?.title} />

            </Head>

            <div className="container">
                <AdBanner/>
                </div>
                <Title styles={"pageTitle"} >
                    <h2>أخبار عاجلة</h2>
                </Title>
                <div className="container">
                <div className='row'>
                    <div className='col-lg-9'>
                        <NewsList/>
                    </div>
                    <div className='col-lg-3'>
                        <SideBar sideBarSequence={[{componentType:'numbered', position:1, title:'الأكثر قراءة'}, {componentType:'SmallBanner', position:2}, {componentType:'simple', position:2, title:'الأكثر قراءة'}, {componentType:'LargeBanner', position:2}]}/>
                    </div>
                </div>
            </div>
        </>
    )

}

export async function getStaticProps() {


    const data = GetMetaData()

    return {
      props: {
        data
      },
    }
  }

export default Index
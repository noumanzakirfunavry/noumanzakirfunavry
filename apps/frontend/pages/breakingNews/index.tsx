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

    const url = window? window.location.href : '';

    return (
        <>
            <Head>
                <meta name="description" content={data?.description} />
                <meta name="title" content={data?.title} />

                <meta name="theme-color" content="#000000" />

                <meta property="og:url" content={url} key="ogurl" />
                <meta property="og:image" content={data?.og?.image} key="ogimage" />
                <meta property="og:image:secure" content={data.og?.image} key="ogimage" />
                <meta property="og:site_name" content={data?.siteName} key="ogsitename" />
                <meta property="og:title" content={data?.og?.title} key="ogtitle"/>
                <meta property="og:description" content={data?.og?.description} key="ogdesc"/>
                <meta property="og:content" content={"website"} key="ogwebsite"/>
                <meta property="og:image:width"  content="975" key="ogimgwidth"/>
                <meta property="og:image:height"  content="557" key="ogimgheight"/>

                <meta name="twitter:card" content={"summary_large_image"} key="twittercard"/>
                <meta name="twitter:site" content={data.twitter?.site} key="twittersite"/>
                <meta name="twitter:title" content={data.twitter?.title} key="twittertitle"/>
                <meta name="twitter:description"  content={data?.twitter?.description} key="twitterdesc"/>
                <meta name="twitter:image" content={data.twitter?.image} key="twitterimage"/>
                <meta name="twitter:image:src" content={data.twitter?.image} key="twitterimagesrc"/>

            </Head>

            <div className="container">
                <AdBanner/>
                </div>
                <Title styles={"pageTitle"} >
                    <h2>أخبار عاجلة</h2>
                </Title>
                <div className="container">
                <div className='PageBuilder-pageRow'>
                    <div className='PageBuilder-col-9'>
                        <NewsList/>
                    </div>
                    <div className='PageBuilder-sidebar'>
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
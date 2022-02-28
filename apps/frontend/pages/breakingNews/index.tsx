/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import NewsList from "apps/frontend/components/BreakingNews/NewsList/NewsList"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"
import Head from "next/head"

const Index = ({post}) =>{

    return (
        <>
            <Head>
                <meta name="description" content={post.activity} />

                <meta name="theme-color" content="#000000" />

                <meta name="og:type" content={post.type} />
                <meta name="og:title" content={post.key} />

            </Head>

            <div className="container">     
                <AdBanner/>
                </div>
                <Title styles={"pageTitle"} >
                    <h2>أخبار عاجلة</h2>
                </Title>
                <div className="container">
                <div className='row'>
                    <div className='col-lg-8'>
                        <NewsList/>
                    </div>
                    <div className='col-lg-4'>
                        <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export async function getStaticProps() {
    const res = await fetch('https://www.boredapi.com/api/activity')
    const post = await res.json()
  
    return {
      props: {
        post,
      },
    }
  }

export default Index
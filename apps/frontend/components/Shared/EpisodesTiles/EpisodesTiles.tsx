/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "../../../services/GetData";
import { baseUrlAdmin, requests } from "../../../services/Requests";
import Link from "next/link";
import { useEffect, useState } from "react";
import newsImage from "../../../styles/images/biden.jpg";
import TimeAgoArabicFormat from "../TimeAgoCustom/TimeAgoArabicFormat";

const EpisodesTiles = ({programDetails}) => {

    const episodes  = programDetails?.episodes;
    const programId = programDetails?.id

    /*const [episodes, setEpisodes] = useState<any[]>([])

    useEffect(() => {
        GetData(`${requests.episodes}`, {}, 'get', false).then(res => {
            setEpisodes(res?.data?.response?.episodes)
            console.log('Episodes::::', res?.data?.response?.episodes)
        }).catch(err => {
            console.warn(err)
        })

    }, [])*/
    
    return (
        <>
        <div className="NewsTiles">
            <div className="row" >
            { // show episodes
                    episodes?.length && episodes.map((episode: any, index: number)=>{
                        return (
                            <div key={index} className="col-md-4 col-sm-6">
                            <div className="newBox VideoNews">
                                {
                                episode?.videoId ?
                                        <>
                                            <div className="NewsImage img_sm_none">
                                                <img className="img-fluid" src={episode?.thumbnail?.path ? baseUrlAdmin+episode?.thumbnail?.path:newsImage.src} />
                                            
                                                <div className="PlayTime">
                                                    <h5>05:21</h5>
                                                    <Link href={{ pathname: 'episode', query: { episodeId: episode.id, programId: programId }}}>
                                                        <a>
                                                            <div className="btn-text">
                                                                <span>???????? ????????</span>
                                                                <button className="btn btn-warning VideoPlay">
                                                                    <i className="fa play_small"></i>
                                                                </button>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                         </>
        
                                    :
        
                                        <div className="NewsImage img_sm_none">
                                            {episode?.thumbnail ? <img className="img-fluid" src={baseUrlAdmin+episode?.thumbnail?.path} />:<img className="img-fluid" src={newsImage.src} />}
                                        </div>
                                    }
        
                               
                                {<div className="NewsInfo">
                                <Link href={{ pathname: 'episode', query: { episodeId: episode.id, programId: programId }}}><a><h4>{episode && episode?.title}</h4> </a></Link>
                                
                                    {/*<Link href={`/episode/`+episode.id}><a><h4>{episode && episode?.title}</h4> </a></Link>*/}
                                    {/*</p><p>?????? 5 ??????????</p>*/}
                                    <p>{<TimeAgoArabicFormat date={episode?.createdAt}/>}</p>
                                </div>}
                            </div>
                        </div>
                    )
                    })
            }
            </div>
            </div>
        </>
    )
}

export default EpisodesTiles
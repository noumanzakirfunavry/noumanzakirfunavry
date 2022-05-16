import { FC, useEffect, useState } from "react"
import newsImage from "../../../styles/images/biden.jpg";
import {requests, baseUrlAdmin} from "../../../services/Requests";
import GetData from "../../../services/GetData";
import Link from "next/link";

const AllProgrmasTilesList = () => {
    const [programsList, setProgramsList] = useState<any>([])

    useEffect(() => {
        GetData(`${requests.programs}`, {}, 'get', false).then(res=>{

            //console.log('Programs:::::::::::::', res?.data?.response?.programs);
            setProgramsList(res?.data?.response?.programs);

        }).catch(err=>{
            console.warn(err)
        })
    }, [])

    return (
        <>
          <div className="NewsTiles">
              <div className="row">

                   { // show programs tiles
                    programsList?.length && programsList.map((item: any, index: number)=>{
                        return(
                            <div className="col-md-4 col-sm-6" key={index}>
                                <div className="programBox">
                                    <div className="programImage">
                                        {/*<img className="img-fluid" src={newsImage.src} />*/}
                                        <img className="img-fluid" src={item?.thumbnail?.path ? baseUrlAdmin+item?.thumbnail?.path:newsImage.src} />
                                    </div>
                                    <div className="programInfo">
                                        <Link href={`/programs/${item.id}`}><a className="nav-link active" aria-current="page">{item.title}</a></Link>
                                        {/*<h4>جلسة الأعمال</h4>*/}
                                    </div>
                                </div>
                            </div>
                        )
                        })
                    }

                  {/*<div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                        <div className="programBox">
                            <div className="programImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="programInfo">
                                <h4>جلسة الأعمال</h4>
                            </div>
                        </div>
                  </div>*/}

                </div>
            </div>
        </>
    )
}

export default AllProgrmasTilesList
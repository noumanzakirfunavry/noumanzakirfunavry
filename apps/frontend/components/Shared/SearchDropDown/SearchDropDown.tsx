import React, { FC, useEffect, useRef, useState } from "react";
import newslistimg from "../../../styles/images/biden2.jpg";
import search from "../../../styles/images/search.svg";
import backArrow from "../../../styles/images/backArrow.svg";
import searchimg from "../../../styles/images/searchimg.jpg";
import Title from "../../Title";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Router from 'next/router';
import { baseUrlAdmin } from '../../../services/Requests';
import { GetArabicFormattedDate } from '../../../services/Util';



const SearchDropDown:FC<any> = ({data, newsSearchData, searchVal, handleNavigation, clearSearchBox}) => {
    const router = useRouter();
    const keys = data ? Object.keys(data) : []

    const searchBox = useRef(null);
    useOutsideClickHandler(searchBox, clearSearchBox)

    useEffect(() => {
        document.addEventListener("keyup", searchOnEnterPress);

        return () => {
            document.removeEventListener("keyup", searchOnEnterPress);
        }
    }, [searchVal])


    const searchOnEnterPress = (event) =>{
        if (event.keyCode === 13) {
            router.push(`/search/?query=${searchVal}&qsearchterm=${searchVal}`)
            clearSearchBox();
          }
    }


    //console.log("Search Dropdown:::::", newsSearchData)
    return (

        <div className='searchResulstBox' ref={searchBox}>
            <div className="dropsearch d-flex align-items-center">
            <input type="text" className="form-control" placeholder={searchVal} value={searchVal}/>
            <a className="search_icon">
                <img src={search.src} alt="search" />
                </a>
                </div>
            <div className="backbar d-flex align-items-center">
            <a onClick={() => handleNavigation("search")}>
                <img src={backArrow.src} alt="backarrow" />
            </a>
                 <h5>{searchVal} <span>عرض جميع نتائج البحث</span></h5>
            </div>
            <Title styles={"topBorderText"}>
                <h3 className="fs24_bolder">الأسهم ذات الصلة</h3>
            </Title>
            <div className="wordCountList">
                <div className="table-responsive">
                    <table className="table table-borderless table-striped">
                        {
                            keys?.length > 0 && keys.map((key:string, index:number)=>{
                                return (
                                    <tr key={index}>
                                        <td>
                                            <h5 className="m-0 p-0">{data[key].MarketMIC}</h5>
                                            {data[key].MarketSymbol}
                                        </td>
                                        <td className="text-start">
                                            <div className="p-0">{data[key].LastPrice}</div>
                                            <div className="p-0 text-success">{`(3.09%)  ${data[key].LastBid}`}</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {/* <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr> */}
                    </table>
                </div>
            </div>
            <Title styles={'topBorderText'}>
                <h3>نتيجة البحث</h3>
            </Title>
            <div className="searchResultList">
                <div className="NewsList">
                    <ul>
                        {
                            newsSearchData?.length && newsSearchData?.map((news:any, index:number)=>{
                                  return(
                                    <li key={index}>
                                        <div className="newsText">
                                            {/*<h6><a>{news?._source?.title}</a></h6>*/}
                                                <a onClick={() => handleNavigation(`newsDetails/`+news._id)}><h6>{news?._source?.title}</h6></a>
                                            {/*<p><a>أمريكا</a> 07 مارس 2022</p>*/}
                                            <p>
                                                { // to show tags
                                                    news?._source?.tags?.map((tag: string, tagIndex: number) => {
                                                        return(
                                                            <a key={tagIndex} href="#">{tag}</a>
                                                        )
                                                    })  
	                                             }
                                                 {GetArabicFormattedDate(news?._source?.createdAt)}
                                            </p>
                                        </div>
                                        { // show thmbnail if video news
                                            news?._source?.videoId ?
                                                <div className="newsImage">
                                                    {news?._source?.thumbnail ? <img className="img-fluid" src={baseUrlAdmin+news?._source.thumbnail?.path} />:<img className="img-fluid" src={searchimg.src} />}
                                                </div>
                                            : // else show image
                                                <div className="newsImage">
                                                    {news?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news?._source.image?.path} />:<img className="img-fluid" src={searchimg.src} />}
                                                </div>
                                            }
                                    </li>
                                  )
                              })
                        }

                        {/*<li>
                            <div className="newsText">
                                <h6><a>
                                ايدن: سيفقد حوالى 10 ملايين أميركي إعانات Amazon البطالة في حال عدم توقيع ترامب خطة الاقتصادي                                     </a></h6>
                                <p><a>أمريكا</a> 07 مارس 2022</p>
                            </div>
                            <div className="newsImage">
                                <img className="img-fluid" src={searchimg.src} />
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <h6><a> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h6>
                                <p><a>أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="newsImage">
                            <img className="img-fluid" src={searchimg.src} />

                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <h6><a> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h6>
                                <p><a>أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="newsImage">
                            <img className="img-fluid" src={searchimg.src} />

                            </div>
                    </li>*/}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SearchDropDown



function useOutsideClickHandler(ref, clearSearchBox) {
     useEffect(() => {
       function handleOutsideClick(event) {
         if (ref.current && !ref.current.contains(event.target)) {
           clearSearchBox();
         }
       }
    
       document.addEventListener("click", handleOutsideClick);
       return () => document.removeEventListener("click", handleOutsideClick);
     }, [ref]);
}

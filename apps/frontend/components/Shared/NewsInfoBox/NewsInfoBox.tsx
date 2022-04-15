import { useEffect, useState } from "react";
import { GetArabicFormattedDateAndTime } from "../../../services/Util";

const NewsInfoBox = ({ news }) =>{

    const[dateCreatedArabicFormat, setDateCreatedArabicFormat] = useState<string>('');
    const[dateUpdatedArabicFormat, setDateUpdatedArabicFormat] = useState<string>('');
   
    //console.log(news?.createdAt);
    //console.log(news?.updatedAt);
    useEffect(() => {
        const createdAt = news?.createdAt.split(".");
        const updatedAt = news?.updatedAt.split(".");
        const dateCreatedRes = news?.createdAt && GetArabicFormattedDateAndTime(createdAt[0]);
        const dateUpdatedRes = news?.updatedAt && GetArabicFormattedDateAndTime(updatedAt[0]);
        dateCreatedRes && setDateCreatedArabicFormat(dateCreatedRes);
        dateUpdatedRes && setDateUpdatedArabicFormat(dateUpdatedRes);
    }, [news])

    return(
        <>
             <div className="NewsInfobox">
                <div className="infoItem">نشر{dateCreatedArabicFormat}</div>
                <div className="infoItem">تم تحريره {dateUpdatedArabicFormat}</div>
                <div className="newsSocial mt_sm_20">
                    <ul>
                        <li><a><i className="fa fa-envelope"></i></a></li>
                        <li><a><i className="fab fa-whatsapp"></i></a></li>
                        <li><a><i className="fab fa-linkedin"></i></a></li>
                        <li><a><i className="fab fa-twitter"></i></a></li>
                        <li><a><i className="fab fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NewsInfoBox
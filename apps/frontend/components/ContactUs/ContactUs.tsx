/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "apps/frontend/services/GetData"
import { requests } from "apps/frontend/services/Requests"
import { BranchProps } from "apps/frontend/types/Types"
import { useEffect, useState } from "react"

const ContactAddresses = () => {

    const [branches, setBranches] = useState<BranchProps[]>([])
    useEffect(()=>{
        GetData(`${requests.branches}/getAll?limit=100&pageNo=1`, {}, 'get', false).then(res=>{
            setBranches(res.data?.response?.branches)
          }).catch(err=>{
            console.warn(err)
          })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className='contactAddress'>
                <h2 className="text-center text-primary mb-5 fs32_bolder">الفروع</h2>
                <div className="row">
                    {
                        branches?.length && branches?.map((branch:BranchProps)=>{
                            return(
                                <div className="col-lg-4 col-md-6" key={branch.id}>
                                    <div className="addressBox">
                                        <h4>{branch.title}</h4>
                                        <ul>
                                            <li>{branch.phone}</li>
                                            <li>{branch.fax}</li>
                                            <li><a>{branch.email}</a></li>
                                            <li>{branch.addressLine1}</li>
                                            <li>{branch.addressLine2}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className="col-lg-4 col-md-6">
                        <div className="addressBox">
                            <h4>دبي ,الإمارات العربية المتحدة</h4>
                            <ul>
                                <li>+971 4 366 4900</li>
                                <li>+971 4 366 4995</li>
                                <li><a href="javascript:void(0)">sales@cnbcarabia.com</a></li>
                                <li>مدينة دبي للإعلام</li>
                                <li>المبنى رقم 7 – الطابق الأول</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="addressBox">
                            <h4> القاهرة ،مصر</h4>
                            <ul>
                                <li>Telephone 1</li>
                                <li>Telephone 2</li>
                                <li>Email</li>
                                <li>Address Line 1</li>
                                <li>Address Line 2</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="addressBox">
                            <h4>الكويت</h4>
                            <ul>
                                <li>Telephone 1</li>
                                <li>Telephone 2</li>
                                <li>Email</li>
                                <li>Address Line 1</li>
                                <li>Address Line 2</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="addressBox">
                            <h4>الدوحة ،قطر</h4>
                            <ul>
                                <li>+971 4 366 4900</li>
                                <li>+971 4 366 4995</li>
                                <li><a href="javascript:void(0)">sales@cnbcarabia.com</a></li>
                                <li>مدينة دبي للإعلام</li>
                                <li>المبنى رقم 7 – الطابق الأول</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="addressBox">
                            <h4>رياض ،سعودية</h4>
                            <ul>
                                <li>Telephone 1</li>
                                <li>Telephone 2</li>
                                <li>Email</li>
                                <li>Address Line 1</li>
                                <li>Address Line 2</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="addressBox">
                            <h4>لندن ،المملكة المتحدة</h4>
                            <ul>
                                <li>Telephone 1</li>
                                <li>Telephone 2</li>
                                <li>Email</li>
                                <li>Address Line 1</li>
                                <li>Address Line 2</li>
                            </ul>
                        </div>
                    </div> */}
            </div>
        </>
    )
}

export default ContactAddresses
import Link from "next/link";

const DetatilBoxes = ({marketIndicesTilesData}) =>{
   
    return (
        <>
            <div className="market-stats">

                { // show market indices tiles
                    marketIndicesTilesData?.length && marketIndicesTilesData.map((item: any, index: number)=>{
                        const bgClass = item?.changePercent > 0 ? 'bg-success' : 'bg-danger';
                        const iconClass = item?.changePercent > 0 ? 'caret_icon_up' : 'caret_icon_down';
                        return(
                            <div className={`marketBox ${bgClass}`} key={index}>
                                <Link href={`/marketGraph/${item?.tickerId}`}><a>
                                <table className="table table-borderless table-sm">
                                    <tbody>
                                    <tr>
                                        <th style={{width:'35%'}}>{item?.shortArabicDescription}</th>
                                        <th className="text-start">{item?.lastPrice}</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className={iconClass}></div>
                                         </td>
                                        <td className="ltr">{item?.lastDelta + ' ' + item?.changePercent}%</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </a>
                                </Link>
                            </div>
                            )
                        })
                }

                       {/*  <div className="marketBox bg-danger">
                            <table className="table table-borderless table-sm">
                                <tbody>
                                <tr>
                                    <th style={{width:'35%'}}>برنت</th>
                                    <th className="text-start">13,370.24</th>
                                </tr>
                                <tr>
                                    <td>
                                         <i className="fa fa-caret-down"></i>
                                        <div className="caret_icon_down"></div>

                                        </td>
                                    <td className="ltr">-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="marketBox bg-danger">
                            <table className="table table-borderless table-sm">
                                <tbody>
                                <tr>
                                    <th style={{width:'35%'}}>برنت</th>
                                    <th className="text-start">13,370.24</th>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="caret_icon_down"></div>
                                    </td>
                                    <td className="ltr">-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="marketBox bg-danger">
                            <table className="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <th style={{width:'35%'}}>برنت</th>
                                    <th className="text-start">13,370.24</th>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="caret_icon_down"></div>
                                    </td>
                                    <td className="ltr">-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="marketBox bg-success">
                            <table className="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <th style={{width:'35%'}}>برنت</th>
                                    <th className="text-start">13,370.24</th>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="caret_icon_up"></div>
                                    </td>
                                    <td className="ltr">-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="marketBox bg-success">
                            <table className="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <th style={{width:'35%'}}>برنت</th>
                                    <th className="text-start">13,370.24</th>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="caret_icon_up"></div>
                                    </td>
                                    <td className="ltr">-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="marketBox bg-success">
                            <table className="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <th style={{width:'35%'}}>برنت</th>
                                    <th className="text-start">13,370.24</th>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="caret_icon_up"></div>
                                    </td>
                                    <td className="ltr">-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-dim pt-2 ltr">5:55:00 PM GMT +3</td>
                                </tr>
                            </tbody>
                            </table>


                </div>*/}
            </div>

        </>
    )
}

export default DetatilBoxes


const SplitScreenBarCharts = () =>{

    return (
        <>
           <div className="marketChart">
               <div className="yellowTitle">
                   <h3>الأسواق</h3>
               </div>
               <div className="chartBox">
                   <ul className="chartTop">
                       <li><h4>محركات السوق</h4></li>
                       <li><a>الرئيسية</a></li>
                       <li><a>الرئيسية</a></li>
                       <li className="active"><a>الرئيسية</a></li>
                       <li><a>الرئيسية</a></li>
                       <li><a>الرئيسية</a></li>
                   </ul>

                    <div className="row">
                        <div className="col-md-6">
                            <h3>أعلى</h3>
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <tr>
                                        <td><strong>TSL</strong></td>
                                        <td style ={{width:'30%'}}>Tesla Inc</td>
                                        <td className="text-success">7.435%</td>
                                        <td style ={{width:'50%'}}>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-success" style ={{width:'100%'}}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>AMZ</strong></td>
                                        <td>Amazon Inc</td>
                                        <td className="text-success">3.435%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-success" style ={{width:'75%'}}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>NFLX</strong></td>
                                        <td>Netflix Inc</td>
                                        <td className="text-success">1.435%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-success" style ={{width:'50%'}}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>CCI</strong></td>
                                        <td>CrowdStrike Holding Inc</td>
                                        <td className="text-success">0.335%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-success" style ={{width:'25%'}}></div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>قاع</h3>
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <tr>
                                    <td><strong>TSL</strong></td>
                                    <td style ={{width:'30%'}}>Tesla Inc</td>
                                    <td className="text-danger">7.435%</td>
                                        <td style ={{width:'50%'}} >
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'100%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <td><strong>AMZ</strong></td>
                                        <td>Amazon Inc</td>
                                        <td className="text-success">3.435%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'75%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>NFLX</strong></td>
                                        <td>Netflix Inc</td>
                                        <td className="text-success">1.435%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>CCI</strong></td>
                                        <td>CrowdStrike Holding Inc</td>
                                        <td className="text-success">0.335%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

               </div>
           </div>
        </>
    )
}

export default SplitScreenBarCharts
/* eslint-disable @typescript-eslint/no-var-requires */
import { useEffect, useState } from "react";
const parseString = require('xml2js').parseString;

//import { useEffect } from 'react';
//import useSWR from 'swr'
//const fetcher = (url) => fetch(url, {mode:'no-cors'}).then((res) => res.text());

type GainerProps = {
    symbol:string,
    Percent:number,
    price:number
}

type GainerLoserProps = {
    Gainer:GainerProps[],
    Looser: GainerProps[],
}

type PageProps = {
    Market:GainerLoserProps[]
}

const SplitScreenBarCharts = () =>{

    //const { data, error } = useSWR('http://localhost/zagtrader/api/GainerLoserAPI.php?type=xml', fetcher)
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // },[])

    const [data, setData] = useState<PageProps>({Market:[]})

    const xml = '<?xml version="1.0" encoding="TF-8" standalone="yes" ?>\
    <response>\
        <Market symbol="DFM" desc="Dubai Financial Market" index="^DFMGI" lastPrice="3335.79" change="26.51" percent="0.80"\
            lastHigh="3336.02" lastLow="3306.66" high52="3332.20" low52="2481.44">\
            <Gainer>\
                <row symbol="ITHMR" Percent="0.008" delta="0.002" price="0.248" />\
                <row symbol="ERC" Percent="0.20" delta="1.40" price="7.00" />\
                <row symbol="ARMX" Percent="0.08" delta="0.33" price="4.12" />\
                <row symbol="SALAMA" Percent="0.012" delta="0.008" price="0.673" />\
                <row symbol="EMRTESNBD" Percent="0.20" delta="2.80" price="14.00" />\
            </Gainer>\
            <Looser>\
                <row symbol="DU" Percent="-0.05" delta="-0.32" price="6.45" />\
                <row symbol="AMANAT" Percent="-0.01" delta="-0.01" price="1.14" />\
                <row symbol="GULFNAV" Percent="0.00" delta="0.00" price="0.29" />\
                <row symbol="SALAM_BAH" Percent="-0.02" delta="-0.02" price="0.97" />\
                <row symbol="CBD" Percent="-0.10" delta="-0.50" price="5.00" />\
            </Looser>\
        </Market>\
    </response>'

    useEffect(()=>{

        getData().then((res)=>{
            parseString(res, function (err, result) {
                setData(result.response)
            });
        }).catch(err=>{
            console.warn(err)
        })
        
    },[])
    
    const market = data?.Market
    const firstMarket = data?.Market && market[0]
    const gainers = firstMarket && firstMarket['Gainer']
    const allGainers = gainers?.length && gainers[0]

    const losers = firstMarket && firstMarket['Looser']
    const allLosers = losers?.length && losers[0]

    const getData = async (): Promise<string> => {
        
        //fetch data and convert to text here
        return xml
    }

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
                            <h3>Gainer</h3>
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                     <tbody>
                                        {
                                            allGainers && allGainers['row'].map((gainer:GainerProps, index:number)=>{
                                                const row = gainer['$']
                                                return(
                                                    <tr key={index}>
                                                        <td><strong>{row?.symbol}</strong></td>
                                                        <td style ={{width:'30%'}}>{row?.symbol}</td>
                                                        <td className="text-success">{`${row?.Percent}%`}</td>
                                                        <td style ={{width:'50%'}}>
                                                            <div className="progress p-0">
                                                                <div className="progress-bar bg-success" style ={{width:`${row?.price}%`}}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        } 
                                    </tbody>
                                    {/* <tr>
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
                                    </tr> */}
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Looser</h3>
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <tbody>
                                        {
                                            allLosers && allLosers['row'].map((loser:any, index:number)=>{
                                                const row = loser['$']
                                                return(
                                                    <tr key={index}>
                                                        <td><strong>{row?.symbol}</strong></td>
                                                        <td style ={{width:'30%'}}>{row?.symbol}</td>
                                                        <td className="text-danger">{`${row?.Percent * -1}%${row?.Percent < 0 ? '-': ''}`}</td>
                                                        <td style ={{width:'50%'}}>
                                                            <div className="progress p-0">
                                                                <div className="progress-bar bg-danger" style ={{width:`${row?.price}%`}}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        } 
                                    </tbody>
                                    {/* <tr>
                                    <td><strong>TSL</strong></td>
                                    <td style ={{width:'30%'}}>Tesla Inc</td>
                                    <td className="text-danger">7.435%</td>
                                        <td style ={{width:'50%'}} >
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <td><strong>AMZ</strong></td>
                                        <td>Amazon Inc</td>
                                        <td className="text-success">3.435%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'75%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>NFLX</strong></td>
                                        <td>Netflix Inc</td>
                                        <td className="text-success">1.435%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>CCI</strong></td>
                                        <td>CrowdStrike Holding Inc</td>
                                        <td className="text-success">0.335%</td>
                                        <td>
                                            <div className="progress p-0">
                                                <div className="progress-bar bg-danger" role="progressbar" style ={{width:'25%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>
                                    </tr> */}
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
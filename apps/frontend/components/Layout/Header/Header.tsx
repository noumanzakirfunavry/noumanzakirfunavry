/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { useState } from 'react';
import logo from '../../../styles/images/cnbc-arabia-logo.svg';
import smallLogo from "../../../styles/images/cnbc-logo-white.svg";
import SearchDropDown from '../../Shared/SearchDropDown/SearchDropDown';
import MobileHeader from './MobileHeader';

const Header = () =>{

    const [showMenuList, setShowMenuList] = useState<boolean>(false)

    const [data, setData] = useState<any>({})

    const handleMenuList = () => {
        setShowMenuList(!showMenuList)
    }

    const handleEvent = (event:any) => {

        getData(event.target.value).then((res)=>{
            setData(res)
        }).catch(err=>{
            console.warn(err)
        })

    }

    const getData = async (value:string): Promise<any> => {

        //fetch data and return
        const data = !value ? {}:{
            "16449": {
                "MarketID": "105",
                "PriceDecimal": 2,
                "ContractSize": 1,
                "LastPrice": 126.09,
                "MinPrice": 0,
                "MaxPrice": 0,
                "LastBid": 91.150000000000006,
                "LastAsk": 124.7,
                "TickerID": 16449,
                "Symbol": "A",
                "ISIN": "US00846U1016",
                "BloombergCode": "",
                "Desc": "Agilent Technologies",
                "DescAR": "Agilent Technologies",
                "MarketSymbol": "US",
                "MarketMIC": "XNYS",
                "MarketDesc": "US Markets",
                "FeedSource": "IDC",
                "IDCSymbol": "A",
                "IDCMarketSymbol": "QB",
                "SymbolAlias": "A",
                "SecurityTypeID": "1",
                "InitialMargin": "0.0"
            },
            "182697": {
                "MarketID": "126",
                "PriceDecimal": 3,
                "ContractSize": 1,
                "LastPrice": 0.75,
                "MinPrice": 0,
                "MaxPrice": 0,
                "LastBid": 0,
                "LastAsk": 0,
                "TickerID": 182697,
                "Symbol": "A",
                "ISIN": "CA04226J1084",
                "BloombergCode": "",
                "Desc": "Armor Minerals Inc",
                "DescAR": "Armor Minerals Inc",
                "MarketSymbol": "TSXV",
                "MarketMIC": "XTSX",
                "MarketDesc": "TSX Venture Exchange (Canada)",
                "FeedSource": "HTTP",
                "IDCSymbol": "A",
                "IDCMarketSymbol": "",
                "SymbolAlias": "A",
                "SecurityTypeID": "1",
                "InitialMargin": "0.0"
            },
            "125200": {
                "MarketID": "151",
                "PriceDecimal": 3,
                "ContractSize": 1,
                "LastPrice": 5,
                "MinPrice": 0,
                "MaxPrice": 0,
                "LastBid": 0,
                "LastAsk": 0,
                "TickerID": 125200,
                "Symbol": "A",
                "ISIN": "TH0770010Z08",
                "BloombergCode": "",
                "Desc": "Areeya Property Public Co Ltd - (SUSPENDED IN WCA) Ordinary Shares",
                "DescAR": "Areeya Property Public Co Ltd - (SUSPENDED IN WCA) Ordinary Shares",
                "MarketSymbol": "THAILAND",
                "MarketMIC": "XBKK",
                "MarketDesc": "Thailand Stock Exchange",
                "FeedSource": "HTTP",
                "IDCSymbol": "A",
                "IDCMarketSymbol": "",
                "SymbolAlias": "A",
                "SecurityTypeID": "1",
                "InitialMargin": "0.0"
             },
            // "352610": {
            //     "MarketID": "144",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 2.5899999999999999,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 352610,
            //     "Symbol": "01712",
            //     "ISIN": "AU000000DRA1",
            //     "BloombergCode": "",
            //     "Desc": "Dragon Mining Limited - Ordinary Shares",
            //     "DescAR": "Dragon Mining Limited - Ordinary Shares",
            //     "MarketSymbol": "HONGKONG",
            //     "MarketMIC": "XHKG",
            //     "MarketDesc": "Hong Kong Stock Exchange",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "01712",
            //     "IDCMarketSymbol": "",
            //     "SymbolAlias": "01712",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // },
            // "352630": {
            //     "MarketID": "144",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 0.28999999999999998,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 352630,
            //     "Symbol": "01752",
            //     "ISIN": "AU0000007296",
            //     "BloombergCode": "",
            //     "Desc": "Top Education Group Ltd - Ordinary Shares",
            //     "DescAR": "Top Education Group Ltd - Ordinary Shares",
            //     "MarketSymbol": "HONGKONG",
            //     "MarketMIC": "XHKG",
            //     "MarketDesc": "Hong Kong Stock Exchange",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "01752",
            //     "IDCMarketSymbol": "",
            //     "SymbolAlias": "01752",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // },
            // "172715": {
            //     "MarketID": "144",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 11.800000000000001,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 172715,
            //     "Symbol": "03668",
            //     "ISIN": "AU000000YAL0",
            //     "BloombergCode": "",
            //     "Desc": "Chinalco Mining Corporation International",
            //     "DescAR": "Chinalco Mining Corporation International",
            //     "MarketSymbol": "HONGKONG",
            //     "MarketMIC": "XHKG",
            //     "MarketDesc": "Hong Kong Stock Exchange",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "03668",
            //     "IDCMarketSymbol": "",
            //     "SymbolAlias": "03668",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // },
            // "325492": {
            //     "MarketID": "108",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 2.71,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 325492,
            //     "Symbol": "0A2N",
            //     "ISIN": "AU000000LYC6",
            //     "BloombergCode": "",
            //     "Desc": "Lynas Corporation Ltd. - Ordinary Shares",
            //     "DescAR": "Lynas Corporation Ltd. - Ordinary Shares",
            //     "MarketSymbol": "LSE",
            //     "MarketMIC": "XLON",
            //     "MarketDesc": "London Stock Exchange",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "0A2N",
            //     "IDCMarketSymbol": "LON",
            //     "SymbolAlias": "0A2N",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // },
            // "327545": {
            //     "MarketID": "116",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 0,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 327545,
            //     "Symbol": "0A2N",
            //     "ISIN": "AU000000LYC6",
            //     "BloombergCode": "",
            //     "Desc": "Lynas Corporation Ltd. - Ordinary Shares",
            //     "DescAR": "Lynas Corporation Ltd. - Ordinary Shares",
            //     "MarketSymbol": "EGGDR",
            //     "MarketMIC": "",
            //     "MarketDesc": "Egyptian GDRs",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "0A2N",
            //     "IDCMarketSymbol": "",
            //     "SymbolAlias": "0A2N",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // },
            // "153976": {
            //     "MarketID": "108",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 0.84999999999999998,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 153976,
            //     "Symbol": "0C6Y",
            //     "ISIN": "AT0000625108",
            //     "BloombergCode": "",
            //     "Desc": "Oberbank AG",
            //     "DescAR": "Oberbank AG",
            //     "MarketSymbol": "LSE",
            //     "MarketMIC": "XLON",
            //     "MarketDesc": "London Stock Exchange",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "0C6Y",
            //     "IDCMarketSymbol": "LON",
            //     "SymbolAlias": "0C6Y",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // },
            // "233862": {
            //     "MarketID": "108",
            //     "PriceDecimal": 3,
            //     "ContractSize": 1,
            //     "LastPrice": 0,
            //     "MinPrice": 0,
            //     "MaxPrice": 0,
            //     "LastBid": 0,
            //     "LastAsk": 0,
            //     "TickerID": 233862,
            //     "Symbol": "0CT7",
            //     "ISIN": "AT0000779061",
            //     "BloombergCode": "",
            //     "Desc": "Schlumberger AG",
            //     "DescAR": "Schlumberger AG",
            //     "MarketSymbol": "LSE",
            //     "MarketMIC": "XLON",
            //     "MarketDesc": "London Stock Exchange",
            //     "FeedSource": "HTTP",
            //     "IDCSymbol": "0CT7",
            //     "IDCMarketSymbol": "LON",
            //     "SymbolAlias": "0CT7",
            //     "SecurityTypeID": "1",
            //     "InitialMargin": "0.0"
            // }
        }
        return data
    }

    const staticMenu = ['Main', 'Infographic', 'program', 'presenters']
    return (
        <>
            <header>
                <div className="container">
                        <div className="header-box">
                            <div className="logo-header">
                                <div className="cnbc-logo">
                                    <Link href="/">
                                        <img role={'button'} title="CNBC Arabia" alt="logo" src={logo.src}/>
                                    </Link>
                                </div>
                                <div className="header-nav">
                                    <nav className="navbar navbar-expand-md">
                                        <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                                            <span className="fa fa-bars text-white"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                            <ul className="navbar-nav">
                                                <li className="nav-item" key={'1'}>
                                                    <a className="nav-link active" aria-current="page" href="/breakingNews">أخبار عاجلة</a>
                                                </li>
                                                <li className="nav-item" key={'2'}>
                                                    <a className="nav-link" href="/infographics">إنفوغرافيك</a>
                                                </li>

                                                <li className="nav-item" key={'3'}>
                                                    <a className="nav-link" href="/presenters" >مذيعو ومراسلو</a>
                                                </li>
                                                <li className="nav-item" key={'4'}>
                                                    <a className="nav-link" href="/latestVideos" >أحدث مقاطع الفيديو</a>
                                                </li>
                                                <li className="nav-item" key={'5'}>
                                                    <a className="nav-link" href="/schedules">جدول البرامج</a>
                                                </li>
                                                <li className="nav-item" key={'6'}>
                                                    <a className="nav-link" href="/videoNews">الفيديو</a>
                                                </li>
                                                <li className="nav-item dropdown" key={'7'}>
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false" >برامج CNBC عربية
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                                        <li key={'8'}>
                                                            <a className="dropdown-item" href="/programs/100/">اكسبو في أسبوع</a>
                                                        </li>
                                                        <li key={'9'}>
                                                            <a className="dropdown-item" href="/program/95/حديث المملكة مع راشد الفوزان">حديث المملكة مع راشد الفوزان</a>
                                                        </li>
                                                        <li key={'10'}>
                                                            <a className="dropdown-item" href="/program/96/تحت الضوء">تحت الضوء</a>
                                                        </li>
                                                        <li key={'11'}>
                                                            <a className="dropdown-item" href="/program/78/وثائقيات">ملفات</a>
                                                        </li>
                                                        <li key={'12'}>
                                                            <a className="dropdown-item" href="/program/90/Tech Talks">Tech Talks</a>
                                                        </li>
                                                        <li key={'13'}>
                                                            <a className="dropdown-item" href="/program/89/CEO Talks">CEO Talks</a>
                                                        </li>
                                                        <li key={'14'}>
                                                            <a className="dropdown-item" href="/program/61/مسار السوق">مسار السوق</a>
                                                        </li>
                                                        <li key={'15'}>
                                                            <a className="dropdown-item" href="/program/33/كلام أسواق">كلام أسواق</a>
                                                        </li>
                                                        <li key={'16'}>
                                                            <a className="dropdown-item" href="/program/87/بين قوسين">بين قوسين</a>
                                                        </li>
                                                        <li key={'17'}>
                                                            <a className="dropdown-item" href="/program/10/حوار الأسبوع">حوار الأسبوع</a>
                                                        </li>
                                                        <li key={'18'}>
                                                            <a className="dropdown-item" href="/program/16/برنامج بموضوعية ">بموضوعية </a>
                                                        </li>
                                                        <li key={'19'}>
                                                            <a className="dropdown-item" href="/program/69/عين على عُمان">عين على عُمان</a>
                                                        </li>
                                                        <li key={'20'}>
                                                            <a className="dropdown-item" href="/program/101/صباح CNBC عربية">صباح CNBC عربية</a>
                                                        </li>
                                                        <li key={'21'}>
                                                            <a className="dropdown-item" href="/program/20/عين على الكويت ">عين على الكويت </a>
                                                        </li>
                                                        <li key={'22'}>
                                                            <a className="dropdown-item" href="/program/23/عين على قطر ">عين على قطر </a>
                                                        </li>
                                                        <li key={'23'}>
                                                            <a className="dropdown-item" href="/program/94/CNBC عربية بودكاست">CNBC عربية بودكاست</a>
                                                        </li>
                                                        <li key={'24'}>
                                                            <a className="dropdown-item" href="/program/17/حديث خاص  ">مقابلة خاصة</a>
                                                        </li>
                                                        <li key={'25'}>
                                                            <a className="dropdown-item" href="/program/5/من حقيبة جو ">حقيبة جو</a>
                                                        </li>
                                                        <li key={'26'}>
                                                            <a className="dropdown-item" href="/program/92/الشجعان... قصة نجاح">الشجعان... قصة نجاح</a>
                                                        </li>
                                                        <li key={'27'}>
                                                            <a className="dropdown-item" href="/program/29/مشاركة ">مشاركة </a>
                                                        </li>
                                                        <li key={'28'}>
                                                            <a className="dropdown-item" href="/program/41/البوصلة">البوصلة</a>
                                                        </li>
                                                        <li key={'29'}>
                                                            <a className="dropdown-item" href="/program/43/بورصات العالم">بورصات العالم</a>
                                                        </li>
                                                        <li key={'30'}>
                                                            <a className="dropdown-item" href="/program/91/The IMPACT">The IMPACT</a>
                                                        </li>
                                                        <li key={'31'}>
                                                            <a className="dropdown-item" href="/program/84/خبر خام">خبر خام</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item" key={'32'}>
                                                    <a className="nav-link" href="/categoryNewsTiles">آخر الأخبار</a>
                                                </li>
                                                <li className="nav-item" key={'33'}>
                                                    <a className="nav-link" href="#">الرئيسية</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </nav>


                                </div>
                            </div>
                            <div className="search-header">
                                <div className="search-box desktop_only d-none d-md-block">
                                    <input type="text"  className="form-control" onChange={(e)=>handleEvent(e)} placeholder="ابحث في الموقع" />
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                <div className="search-box mobile_only d-md-none">
                                <input type="text"  className="form-control" onChange={(e)=>handleEvent(e)}  />
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                <div className="header-search-nav">
                                    <ul>
                                        <li key={'wser'}><a href="/liveTv">المباشر <span className="youtube-icon"><i className="fa fa-play"></i></span></a></li>
                                        <li><a key={'dsad'} href="/breakingNews">عاجل</a></li>
                                        <li><a key={'adss'} data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل الدخول</a></li>
                                    </ul>
                                </div>
                                {
                                    Object.keys(data).length ? (<SearchDropDown data={data}/>) : ''
                                }

                            </div>

                        </div>
                    </div>
                </header>
                <div className='mobileHeader'>
                    <ul>
                        <li><a onClick={handleMenuList}>
                                <span className='menuIcon'><i className='fa fa-bars'></i></span>
                                قائمة
                            </a></li>
                        <li><a>
                            <span className='menuIcon'><i className='fa fa-chart-line'></i></span>
                                الأسواق
                            </a></li>
                        <li><a href="/liveTv">
                            <span className='menuIcon'><i className='fab fa-youtube-square'></i></span>
                            المباشر
                        </a></li>
                        <li className='pt-2'><a title='CNBC Arabia'><img className='img-fluid' src={smallLogo.src} /></a></li>
                    </ul>
                </div>
                {
                    showMenuList && (
                        <MobileHeader handleMenuList={handleMenuList}/>
                    )
                }
        </>
    )
}

export default Header
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import logo from '../../../styles/images/cnbc-arabia-logo.svg';
import smallLogo from "../../../styles/images/cnbc-logo-white.svg";
import market from "../../../styles/images/market.svg";
import direct from "../../../styles/images/direct.svg";
import togglebar from "../../../styles/images/togglebar.svg";
import SearchDropDown from '../../Shared/SearchDropDown/SearchDropDown';
import MobileHeader from './MobileHeader';

import { CategoryProps } from '../../../types/Types';

import GetData from '../../../services/GetData';
import { requests } from '../../../services/Requests';



const Header = () =>{

    //TODO, will refactor code soon related to search dropdown
    const [showMenuList, setShowMenuList] = useState<boolean>(false)
    const [displaySearchDropDown, setdisplaySearchDropDown] = useState<boolean>(false)
    const [data, setData] = useState<any>({})
    const router = useRouter()
    const [moreMenuItems, setMoreMenuItems] = useState<any>([])  //[{title:'مذيعو ومراسلو', url:'/presenters'}, {title:'أحدث مقاطع الفيديو', url:'/latestVideos'}, {title:'إنفوغرافيك', url:'/infographics'},{title:'جدول البرامج', url:'/schedules'}, {title:'آخر الأخبار', url:'/latestNews'},{title:'أخبار عاجلة', url:'/breakingNews'}]
    const [newsCategoriesList, setNewsCategoriesList] = useState<CategoryProps[]>([])
    const [programsList, setProgramsList] = useState<any>([])

    // news search data
    const [newsSearchData, setNewsSearchData] = useState<any>([])

    // search Val
    const [searchVal, setSearchVal] = useState<any>("")

    const [scroll, setScroll] = useState(true);

    const [params, setParams] = useState<any>({
        limit:20,
        pageNo:1
      });

    useEffect(() => {
      document.addEventListener("scroll", handleScroll)

      return () => {
        document.removeEventListener("scroll", handleScroll)
      }

    })

    useEffect(()=>{
       // document.addEventListener("mousedown", handleClickOutside);
        window.scrollTo(0,0);
        clearSearchBox();

        // get categories list to show in sub menu
        GetData(`${requests.categories}/getAll?limit=${params.limit}&pageNo=${params.pageNo}&displayInCategoryMenu=true`, {}, 'get', false).then(res=>{

            const newsCategories = res.data?.response?.categories && res.data?.response?.categories?.length ? res.data.response.categories : []
            setNewsCategoriesList(newsCategories);

        }).catch(err=>{
            console.warn(err)
        })

        //get all menus
        getAllMenus()

        //get all programs
        getAllPrograms()

        //return () => {
        //    document.removeEventListener("mousedown", handleClickOutside);
       // }
    },[])

    const getAllMenus = () =>{
        GetData(`${requests.moreMenus}getAll?position=HEADER&limit=50&pageNo=1`, {}, 'get', false).then(res=>{

            //console.log('Menus::::::::::', res?.data?.response);
            setMoreMenuItems(res?.data?.response);

        }).catch(err=>{
            console.warn(err)
        })
    }

    const getAllPrograms = () =>{
        GetData(`${requests.programs}`, {}, 'get', false).then(res=>{
            //console.log('Programs:::::::::::::', res?.data?.response?.programs);
            setProgramsList(res?.data?.response?.programs);

        }).catch(err=>{
            console.warn(err)
        })
    }

    const handleScroll = () => {
        const scrollCheck = window.scrollY < 50
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
    }

    const handleMenuList = () => {
        setShowMenuList(!showMenuList)
    }

    const handleEvent = (event:any) => {

        setdisplaySearchDropDown(true)
        setSearchVal(event.target.value)

        if(event.target.value){
            setSearchData(event.target.value)
        }

    }
 
    const clearSearchBox = () => {
        setdisplaySearchDropDown(false)
        setSearchVal('')
    }

    const handleNavigation = (path: string) => {
        if(path === 'search'){
            router.push(`/${path}/?query=${searchVal}&qsearchterm=${searchVal}`)
        } else {
            router.push(`/${path}`)
        }

        clearSearchBox();
    }


    const handleRouting = (url:string, index:number) =>{
       index !== 4 && router.push(`/${url}`)
       index === 4 && clearSearchBox()
    }
    
    const setSearchData = (value:string) => {
        //!value ? {}:
        //fetch data and return
          
        if(value){
            // fetch(`https://cnbc-config.cnbcarabia.com/zagTrader/api/TickerSearchAPIFull.php?st=${value}`, { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}}).then(response => {console.log('data for header',response.json())})
            GetData(`https://cnbc-config.cnbcarabia.com/zagTrader/api/TickerSearchAPIFull.php?st=${value}`, {}, 'get', false).then(res=>{
                setData(res?.data);
                console.log('zagtrader::::::::', res);
            }).catch(err=>{
                console.warn(err)
            })

            GetData(`${requests.search}`, {
                    searchTerm: `${value}`
                }, 'post', false).then(res=>{
                    //console.log('search Data', res?.data);
                    setNewsSearchData(res?.data)
                
                }).catch(err=>{
                    console.warn(err)
            });
        }
  

        /*const data = {
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

        }
        return data*/
    }



    return (
        <>
            <header  className={scroll ? 'default':'sticky_header'}>
                <div className="container">

                        <div className={'header-box'}>
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
                                                {/* {
                                                    menuBar.length && menuBar.map((menuItem, index)=>{
                                                        return(
                                                            <li className="nav-item" key={index}>
                                                                <a className="nav-link active" aria-current="page" onClick={(e)=>handleRouting(menuItem.url, index)}>{menuItem.title}</a>
                                                            </li>
                                                        )
                                                    })
                                                } */}
                                                <li className="nav-item" key={'1'}>
                                                    <Link href="/"><a className="nav-link active" aria-current="page">الرئيسية</a></Link>
                                                    <div className="nav-menu-navUnderline"></div>
                                                </li>
                                                <li className="nav-item" key={'654564ytf7653'}>
                                                    <Link href="/latestVideos"><a className="nav-link active" aria-current="page">فيديو CNBC عربية</a></Link>
                                                    <div className="nav-menu-navUnderline"></div>
                                                </li>
                                                {/* <li className="nav-item" key={'2'}>
                                                    <Link href="/videoNews"><a className="nav-link">الفيديو</a></Link>
                                                    <div className="nav-menu-navUnderline"></div>
                                                </li> */}
                                                {/*<li className="nav-item dropdown" key={'98788'}>
                                                    <a className="nav-link dropdown-toggle" href="#" id="morePrograms" role="button" data-bs-toggle="dropdown" aria-expanded="false" >برامج CNBC عربية
                                                    </a>
                                                    <div className="nav-menu-navUnderline"></div>
                                                    <ul className="dropdown-menu" aria-labelledby="morePrograms">
                                                        <li key={'8'}>
                                                            <Link href="/programs/100/"><a className="dropdown-item">اكسبو في أسبوع</a></Link>
                                                        </li>
                                                        <li className='sb_hover' key={'9'}>
                                                            <Link href="/programs/95/"><a className="dropdown-item">  حديث المملكة مع راشد الفوزان <i className='fa fa-angle-left me-2'></i> </a></Link>
                                                            <ul className="dropdown-menu dropdown-submenu" aria-labelledby="morePrograms">
                                                                <li>
                                                                <Link href="/programs/95/"><a className="dropdown-item">حديث المملكة مع راشد الفوزان</a></Link>
                                                                </li>
                                                                <li>
                                                            <Link href="/programs/96/"><a className="dropdown-item">تحت الضوء</a></Link>
                                                                </li>
                                                                <li>
                                                            <Link href="/programs/96/"><a className="dropdown-item">تحت الضوء</a></Link>
                                                                </li>
                                                                <li>
                                                            <Link href="/programs/96/"><a className="dropdown-item">تحت الضوء</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li key={'10'}>
                                                            <Link href="/programs/96/"><a className="dropdown-item">تحت الضوء</a></Link>
                                                        </li>
                                                        <li key={'11'}>
                                                            <Link href="/programs/78/"><a className="dropdown-item">وثائقيات</a></Link>
                                                        </li>
                                                        <li key={'12'}>
                                                            <Link href="/programs/90/"><a className="dropdown-item">Tech Talks</a></Link>
                                                        </li>
                                                        <li key={'13'}>
                                                            <Link href="/programs/89/"><a className="dropdown-item">CEO Talks</a></Link>
                                                        </li>
                                                        <li key={'14'}>
                                                            <Link href="/programs/61/"><a className="dropdown-item">مسار السوق</a></Link>
                                                        </li>
                                                        <li key={'15'}>
                                                            <Link href="/programs/33/"><a className="dropdown-item">كلام أسواق</a></Link>
                                                        </li>
                                                        <li key={'16'}>
                                                            <Link href="/programs/87/"><a className="dropdown-item">بين قوسين</a></Link>
                                                        </li>
                                                        <li key={'17'}>
                                                            <Link href="/programs/10/"><a className="dropdown-item">حوار الأسبوع</a></Link>
                                                        </li>

{/*
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
                                                </li>*/}

                                                <li className="nav-item dropdown" key={'654564ytf7654'}>
                                                    <a className="nav-link dropdown-toggle" href="#" id="morePrograms" role="button" data-bs-toggle="dropdown" aria-expanded="false" >برامج CNBC عربية
                                                    </a>
                                                    <div className="nav-menu-navUnderline"></div>
                                                    <ul className="dropdown-menu" aria-labelledby="morePrograms">
                                                    { // show programs in sub menu
                                                        programsList?.length && programsList.map((item: any, index: number)=>{
                                                            return(
                                                                <li className="nav-item" key={index}> 
                                                                    <Link href={`/programs/${item.id}`}><a className="nav-link active" aria-current="page">{item.title}</a></Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown" key={'654564ytf7655'}>
                                                    <a className="nav-link dropdown-toggle" href="#" id="moreCategories" role="button" data-bs-toggle="dropdown" aria-expanded="false" >التصنيفات
                                                    </a>
                                                    <div className="nav-menu-navUnderline"></div>
                                                    <ul className="dropdown-menu" aria-labelledby="moreCategories">
                                                    { // show categories in sub menu
                                                        newsCategoriesList?.length && newsCategoriesList.map((item: CategoryProps, index: number)=>{
                                                            return(
                                                                <li className="nav-item" key={index}> 
                                                                    <Link href={`/categoryNewsTiles/${item.id}`}><a className="nav-link active" aria-current="page">{item.title}</a></Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                </li>
                                                <li className="nav-item" key={'35'}>
                                                    <Link href="/marketGraph"><a className="nav-link">الأسواق</a></Link>
                                                    <div className="nav-menu-navUnderline"></div>
                                                </li>

                                                { // dynamic menu with nested sub menu
                                                    moreMenuItems?.length > 0 && (
                                                        moreMenuItems[0]?.childMenus?.length === 0 ?
                                                        <li className="nav-item" key={moreMenuItems[0].title}>
                                                            <Link href={moreMenuItems[0].url}><a className="nav-link" >{moreMenuItems[0].title}</a></Link>
                                                            <div className="nav-menu-navUnderline"></div>
                                                        </li>

                                                        : 

                                                        <li className="nav-item dropdown" key={'654564ytf7657'}>
                                                            <Link href={moreMenuItems[0].url}><a className="nav-link dropdown-toggle" href="#" id="moreDynamicMenus" role="button" data-bs-toggle="dropdown" aria-expanded="false" >{moreMenuItems[0].title}</a></Link>
                                                            <div className="nav-menu-navUnderline"></div>
                                                            <ul className="dropdown-menu" aria-labelledby="moreDynamicMenus">
                                                            { // show nested menu
                                                                moreMenuItems[0]?.childMenus?.length && moreMenuItems[0]?.childMenus.map((subMenuItem: any, subMenuIndex: number)=>{
                                                                    return(
                                                                        <li className="nav-item" key={subMenuIndex}> 
                                                                            <Link href={subMenuItem.url}><a className="nav-link active" aria-current="page">{subMenuItem.title}</a></Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                            </ul>
                                                        </li>
                                                                
                                                        )
                                                   
                                                }
                                                
                                                <li className="nav-item dropdown" key={'654564ytf7656'}>
                                                    <a className="nav-link dropdown-toggle" id="moreOtions" role="button" data-bs-toggle="dropdown" aria-expanded="false" >المزيد
                                                    </a>
                                                    <div className="nav-menu-navUnderline"></div>
                                                    <ul className="dropdown-menu" aria-labelledby="moreOtions">
                                                    {
                                                         moreMenuItems?.length > 1 && 
                                                                moreMenuItems?.map((menuItem:any, index:number)=>{
                                                                    if(index > 0)
                                                                    {
                                                                        return (
                                                                            <>
                                                                            {
                                                                                menuItem?.childMenus?.length === 0 ?
                                                                                <li className="nav-item" key={index}>
                                                                                    <Link href={menuItem.url}><a className="nav-link" >{menuItem.title}</a></Link>
                                                                                </li>

                                                                                : 

                                                                                <li className='sb_hover' key={index}>
                                                                                    <Link href={menuItem.url}><a className="dropdown-item"> {menuItem.title}<i className='fa fa-angle-left me-2'></i> </a></Link>
                                                                                    {menuItem.childMenus?.length > 0 && 
                                                                                        <ul className="dropdown-menu dropdown-submenu" aria-labelledby="morePrograms">
                                                                                            { // show nested menu
                                                                                                menuItem.childMenus?.map((subMenuItem:any, subMenuIndex:number)=>{
                                                                                                    return (
                                                                                                        <li key={subMenuIndex}>
                                                                                                            <Link href={subMenuItem.url}><a className="dropdown-item">{subMenuItem.title}</a></Link>
                                                                                                        </li>
                                                                                                    )
                                                                                                })
                                                                                            }
                                                                                        </ul>
                                                                                    }
                                                                                </li>
                                                                            }
                                                                            </>
                                                                        )
                                                                    }
                                                                    
                                                                })
                                                            }
                                                    </ul>
                                                    
                                                </li>

                                            </ul>
                                        </div>
                                    </nav>


                                </div>
                            </div>
                            <div className="search-header">
                                <div className="search-box desktop_only">
                                    <input type="text"  className="form-control" onChange={(e)=>handleEvent(e)} placeholder="ابحث في الموقع" />
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                {/* <div className="search-box mobile_only d-md-none">
                                <input type="text"  className="form-control" onChange={(e)=>handleEvent(e)}  />
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div> */}
                                <div className="header-search-nav">
                                    <ul>
                                        <li key={'wser'}><Link href="/liveTv"><a >المباشر <span className="youtube-icon"><i className="fa fa-play"></i></span></a></Link></li>
                                        <li key={'dsad'}><Link href="/breakingNews"><a>عاجل</a></Link></li>
                                        <li key={'adss'} className='sticky_none'><a data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل الدخول</a></li>
                                    </ul>
                                </div>
                                {
                                    displaySearchDropDown && (<SearchDropDown data={data} newsSearchData={newsSearchData} searchVal={searchVal} handleNavigation={handleNavigation} clearSearchBox={clearSearchBox} />)
                                }

                            </div>

                        </div>
                    </div>
                </header>
                <div className='mobileHeader'>
                    <ul>
                        <li><a onClick={handleMenuList}>
                                <span className='menuIcon'>
                                <img className='img-fluid' src={market.src} />
                                    {/* <i className='fa fa-bars'></i> */}
                                </span>
                                قائمة
                            </a></li>
                        <li><a>
                            <span className='menuIcon'>
                                {/* <i className='fa fa-chart-line'></i> */}
                                <img className='img-fluid' src={direct.src} />

                                </span>
                                الأسواق
                            </a></li>
                        <li><a href="/liveTv">
                            <span className='menuIcon'>
                                {/* <i className='fab fa-youtube-square'></i> */}
                                <img className='img-fluid' src={togglebar.src} />
                                </span>
                            المباشر
                        </a></li>
                        <li className='pt-2'><a title='CNBC Arabia'>
                            <img className='img-fluid' src={smallLogo.src} />
                            </a></li>
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
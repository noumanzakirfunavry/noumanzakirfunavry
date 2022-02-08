/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import logo from '../../../styles/images/cnbc-arabia-logo.svg';
import smallLogo from "../../../styles/images/cnbc-logo-white.svg";
import SearchDropDown from '../../Shared/SearchDropDown/SearchDropDown';

const Header = () =>{
   
    return (
        <>
            <header>
                <div className="container">
                        <div className="header-box">
                            <div className="logo-header">
                                <div className="cnbc-logo">
                                    <Link href="/">
                                        <img role={'button'} title="CNBC Arabia" src={logo.src}/>
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
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >برامج CNBC عربية
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
                                <div className="search-box">
                                    <input type="text" className="form-control" placeholder="ابحث في الموقع" />
                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                </div>
                                <div className="header-search-nav">
                                    <ul>
                                        <li key={'wser'}><a href="/liveTv">المباشر <span className="youtube-icon"><i className="fa fa-play"></i></span></a></li>
                                        <li><a key={'dsad'} href="/breakingNews">عاجل</a></li>
                                        <li><a key={'adss'} data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل الدخول</a></li>
                                    </ul>
                                </div>
                                <SearchDropDown/>
                            </div>

                        </div>
                    </div>
                </header>
                <div className='mobileHeader'>
                    <ul>
                        <li><a>
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
               
        </>
    )
}

export default Header
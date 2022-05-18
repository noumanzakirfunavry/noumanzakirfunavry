/* eslint-disable @next/next/no-html-link-for-pages */


import { useRouter } from 'next/router';
import logo from '../../../styles/images/cnbc-arabia-logo.svg';
import styles from './footer.module.css';
import { requests } from '../../../services/Requests';
import GetData from '../../../services/GetData';
import { useEffect, useState } from 'react';
import FooterMenu from './Menu/FooterMenu';

const Footer = () =>{
    const router = useRouter()

    const [menuSectionList, setMenuSectionList] = useState<any>([]);

    useEffect(() => {
        GetData(`${requests.moreMenus}getAll?position=FOOTER&limit=12&pageNo=1`, {}, 'get', false).then(res=>{
            setMenuChunks(res?.data?.response)
            
        }).catch(err=>{
            console.warn(err)
        })
    }, [])

    const setMenuChunks = (menuItems) => {
        const chunkSize = 4;
        const sections = menuItems.map((e, i) => { 
            return i % chunkSize === 0 ? menuItems.slice(i, i + chunkSize) : null; 
        }).filter(e => { return e; });
        
        setMenuSectionList(sections);
    }


    return (
        <>
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div className={styles.footerSocial}>
                        <ul>
                            <li  key={'asdlhsa'}><a title='Youtube'><i className='fab fa-youtube'></i></a></li>
                            <li  key={'sdv3w'}><a title='Instagram'><i className='fab fa-instagram'></i></a></li>
                            <li  key={'fcvxv'}><a title='Linkedin'><i className='fab fa-linkedin'></i></a></li>
                            <li  key={'vd4w'}><a title='Twitter'><i className='fab fa-twitter'></i></a></li>
                            <li  key={'cvfdh65'}><a title='Facebook'><i className='fab fa-facebook-f'></i></a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLogo}>
                        <img src={logo.src} />
                    </div>
                    <div className={styles.clearfix}></div>
                </div>
                <div className='row w_90'>
                    { // menu sections
                        menuSectionList?.length > 0 && menuSectionList.map((item: any, index: number)=>{
                            return(
                                    <div className='col-xl-2 col-md-4 col-6 pb-5 pb-lg-0' key={index}>
                                        <ul className={styles.footerLink}>
                                            <FooterMenu pageNo={(index + 1)}/>
                                        </ul>
                                    </div>
                            )
                        })
                    }

                    {/*<div className='col-xl-2 col-md-4 col-6 pb-5 pb-lg-0'>
                        <ul className={styles.footerLink}>
                            <li><a href="#">الرئيسية</a></li>
                            <li key={'zxc'}><a href="#">إشترك في نشرتنا البريدية</a></li>
                            <li key={'xvvcb'}><a href="#">الرئيسية</a></li>
                            <li key={'aswerddlhsa'}><a href="#">إشترك في نشرتنا البريدية</a></li>
                            <li key={'dvsfdf'}><a href="#">الرئيسية</a></li>
                        </ul>
                    </div>
                    <div className='col-xl-2 col-md-4 col-6 pb-5 pb-lg-0'>
                    <ul className={styles.footerLink}>
                    <li><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'xcve'}><a href="#">الرئيسية</a></li>
                            <li key={'vdsf'}><a href="#">إشترك في نشرتنا البريدية</a></li>
                            <li key={'xbruyt'}><a href="#">الرئيسية</a></li>
                            <li key={'dt4366'}><a href="#">الرئيسية </a></li>
                        </ul>
                    </div>
                    <div className='col-xl-3 col-md-4 col-sm-6 pb-5 pb-lg-0'>
                    <ul className={styles.footerLink}>
                            <li key={'fdg4yt'}><a href="#">الرئيسية</a></li>
                            <li key={'dfgdfbgfh'}><a href="#" >إشترك في نشرتنا البريدية</a></li>
                            <li key={'dfdsffs'}><a href="#" >الرئيسية</a></li>
                            <li key={'54765'}><a href="#">إشترك في نشرتنا البريدية</a></li>
                            <li key={'hgf'}><a href="/careers">الرئيسية</a></li>
                        </ul>
    </div>*/}

                    <div className="col-12 text-center d-sm-none">
                    <div className={styles.footerSocial}>
                        <ul>
                            <li  key={'asdlhsa'}><a title='Youtube'><i className='fab fa-youtube'></i></a></li>
                            <li  key={'sdv3w'}><a title='Instagram'><i className='fab fa-instagram'></i></a></li>
                            <li  key={'fcvxv'}><a title='Linkedin'><i className='fab fa-linkedin'></i></a></li>
                            <li  key={'vd4w'}><a title='Twitter'><i className='fab fa-twitter'></i></a></li>
                            <li  key={'cvfdh65'}><a title='Facebook'><i className='fab fa-facebook-f'></i></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-sm-6 order-xl-1 mt-lg-5 mt-xl-0 '>
                        <h4>إشترك في نشرتنا البريدية</h4>
                        <div className={styles.searchBox}>
                                    <input type="text" className="form-control" placeholder="ابحث في الموقع" />
                                </div>
                                <button className='btn btn-primary fs12_bold min_w111_h31' data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل الدخول </button>
                    </div>
                    <div className='col-xl-2 col-lg-4 col-sm-4 pb-5 pb-sm-0  order-xl-0 me-auto ms-0 offset-1 mt-lg-5 mt-xl-0'>
                        <h4>اتصل بنا</h4>
                        {/* <button className='btn btn-outline-light fs12_bold min_w111_h31' onClick={() => router.push('/contact')}>ابقى على تواصل</button> */}
                        <button className='btn btn-primary fs12_bold min_w111_h31' onClick={() => router.push('/contact')}>ابقى على تواصل</button>
                    </div>





                </div>
                <div className={styles.footerBottom}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='text-uppercase'>© 2021 cnbcarabia.com All Rights Reserved </p>
                        </div>
                        <div className='col-md-6 text-end text-md-start'>
                            <p>MARKET TECHNOLOGY POWERED BY ZAGTRADER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer
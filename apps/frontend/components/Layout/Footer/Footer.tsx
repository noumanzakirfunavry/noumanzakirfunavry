

import logo from '../../../styles/images/cnbc-arabia-logo.svg';
import styles from './footer.module.css';

const Footer = () =>{
    return (
        <>
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div className={styles.footerSocial}>
                        <ul>
                            <li  key={'asdlhsa'}><a ><i className='fab fa-youtube'></i></a></li>
                            <li  key={'sdv3w'}><a ><i className='fab fa-instagram'></i></a></li>
                            <li  key={'fcvxv'}><a ><i className='fab fa-linkedin'></i></a></li>
                            <li  key={'vd4w'}><a ><i className='fab fa-twitter'></i></a></li>
                            <li  key={'cvfdh65'}><a ><i className='fab fa-facebook-f'></i></a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLogo}>
                        <img src={logo.src} />
                    </div>
                    <div className={styles.clearfix}></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <ul className={styles.footerLink}>
                        <li><a >الرئيسية</a></li>
                            <li key={'zxc'}><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'xvvcb'}><a >الرئيسية</a></li>
                            <li key={'aswerddlhsa'}><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'dvsfdf'}><a >الرئيسية</a></li>
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    <ul className={styles.footerLink}>
                    <li><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'xcve'}><a >الرئيسية</a></li>
                            <li key={'vdsf'}><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'xbruyt'}><a >الرئيسية</a></li>
                            <li key={'dt4366'}><a >الرئيسية</a></li>
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    <ul className={styles.footerLink}>
                            <li key={'fdg4yt'}><a >الرئيسية</a></li>
                            <li key={'dfgdfbgfh'}><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'dfdsffs'}><a >الرئيسية</a></li>
                            <li key={'54765'}><a >إشترك في نشرتنا البريدية</a></li>
                            <li key={'hgf'}><a >الرئيسية</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h4>اتصل بنا</h4>
                        <button className='btn btn-outline-light'>ابقى على تواصل</button>
                    </div>
                    <div className='col-md-3'>
                        <h4>إشترك في نشرتنا البريدية</h4>
                        <div className={styles.searchBox}>
                                    <input type="text" className="form-control" placeholder="ابحث في الموقع" />
                                </div>
                                <button className='btn btn-primary'>تسجيل الدخول </button>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p>© 2021 cnbcarabia.com All Rights Reserved </p>
                        </div>
                        <div className='col-md-6 text-start'>
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
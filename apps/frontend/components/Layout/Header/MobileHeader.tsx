/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @next/next/no-html-link-for-pages */
import { MobileHeaderProps } from "apps/frontend/types/Types"
import { FC } from "react"

const MobileHeader:FC<MobileHeaderProps> = ({handleMenuList}) => {

   return (
       <>
            <div className='MobileToggleNav'>
                            <button className='btn btn-link btn-cancel' onClick={handleMenuList}><i className='fa fa-times'></i></button>
                            
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/breakingNews">أخبار عاجلة</a></li>
                                <li className="nav-item"><a className="nav-link" href="/infographics">إنفوغرافيك</a></li>
                                <li className="nav-item"><a className="nav-link" href="/presenters">مذيعو ومراسلو</a></li>
                                <li className="nav-item"><a className="nav-link" href="/latestVideos">أحدث مقاطع الفيديو</a></li>
                                <li className="nav-item"><a className="nav-link" href="/schedules">جدول البرامج</a></li>
                                <li className="nav-item"><a className="nav-link" href="/videoNews">الفيديو</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">برامج CNBC عربية</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="/programs/100/">اكسبو في أسبوع</a></li>
                                        <li><a className="dropdown-item" href="/program/95/حديث المملكة مع راشد الفوزان">حديث المملكة مع راشد الفوزان</a></li>
                                        <li><a className="dropdown-item" href="/program/96/تحت الضوء">تحت الضوء</a></li>
                                        <li><a className="dropdown-item" href="/program/78/وثائقيات">ملفات</a></li>
                                        <li><a className="dropdown-item" href="/program/90/Tech Talks">Tech Talks</a></li>
                                        <li><a className="dropdown-item" href="/program/89/CEO Talks">CEO Talks</a></li>
                                        <li><a className="dropdown-item" href="/program/61/مسار السوق">مسار السوق</a></li>
                                        <li><a className="dropdown-item" href="/program/33/كلام أسواق">كلام أسواق</a></li>
                                        <li><a className="dropdown-item" href="/program/87/بين قوسين">بين قوسين</a></li>
                                        <li><a className="dropdown-item" href="/program/10/حوار الأسبوع">حوار الأسبوع</a></li>
                                        <li><a className="dropdown-item" href="/program/16/برنامج بموضوعية ">بموضوعية </a></li>
                                        <li><a className="dropdown-item" href="/program/69/عين على عُمان">عين على عُمان</a></li>
                                        <li><a className="dropdown-item" href="/program/101/صباح CNBC عربية">صباح CNBC عربية</a></li>
                                        <li><a className="dropdown-item" href="/program/20/عين على الكويت ">عين على الكويت </a></li>
                                        <li><a className="dropdown-item" href="/program/23/عين على قطر ">عين على قطر </a></li>
                                        <li><a className="dropdown-item" href="/program/94/CNBC عربية بودكاست">CNBC عربية بودكاست</a></li>
                                        <li><a className="dropdown-item" href="/program/17/حديث خاص ">مقابلة خاصة</a></li>
                                        <li><a className="dropdown-item" href="/program/5/من حقيبة جو ">حقيبة جو</a></li>
                                        <li><a className="dropdown-item" href="/program/92/الشجعان... قصة نجاح">الشجعان... قصة نجاح</a></li>
                                        <li><a className="dropdown-item" href="/program/29/مشاركة ">مشاركة </a></li>
                                        <li><a className="dropdown-item" href="/program/41/البوصلة">البوصلة</a></li>
                                        <li><a className="dropdown-item" href="/program/43/بورصات العالم">بورصات العالم</a></li>
                                        <li><a className="dropdown-item" href="/program/91/The IMPACT">The IMPACT</a></li>
                                        <li><a className="dropdown-item" href="/program/84/خبر خام">خبر خام</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/categoryNewsTiles">آخر الأخبار</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">الرئيسية</a></li>
                                <li className="nav-item">
                                    <a href="/liveTv" className="nav-link">
                                        المباشر <span className="youtube-icon"><i className="fa fa-play"></i></span>
                                    </a>
                                </li>
                                <li className="nav-item"><a href="/breakingNews" className="nav-link">عاجل</a></li>
                                <li className="nav-item"><a className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل الدخول</a></li>

                            </ul>


                        </div>
       </>
   )
}

export default MobileHeader
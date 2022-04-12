/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @next/next/no-html-link-for-pages */
import { MobileHeaderProps } from 'apps/frontend/types/Types';
import logo from '../../../styles/images/cnbc-arabia-logo.svg';
import close from '../../../styles/images/crose.svg';
import search from '../../../styles/images/search.svg';
import Link from 'next/link';
import { FC } from 'react';


const MobileHeader: FC<MobileHeaderProps> = ({ handleMenuList }) => {
  return (
    <>

      <div className="MobileToggleNav">
        <div className="toggle_header">
        <Link href="/">
          <img role={'button'} title="CNBC Arabia" alt="logo" src={logo.src}/>
        </Link>

        <button className="btn btn-link btn-cancel" onClick={handleMenuList}>
          {/* <i className="fa fa-times"></i> */}
          <img role={'button'} title="closeIcon" alt="close" src={close.src}/>
        </button>
        </div>
        <div className="input-group flex-nowrap ltr search_page_search p-3 mb-2">
                            <span className="input-group-text bg-white text-primary">
                                {/* <i className="fa fa-search"></i> */}
                                <img className="img-fluid" src={search.src} />
                                </span>
                            <input type="text" className="form-control text-end border-start-0" placeholder="Amazon"/>
                        </div>
        <div className="header-search-nav">
                                    <ul >
                                    <li key={'dsad'}><Link href="/breakingNews"><a>عاجل</a></Link></li>

                                        <li key={'adss'} className='sticky_none'><a data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل الدخول</a></li>
                                        <li key={'wser'}><Link href="/liveTv"><a > المباشر <span className="youtube-icon"><i className="fa fa-play"></i></span></a></Link></li>

                                    </ul>
                                </div>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      الرئيسية
      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      أخبار الشركات
      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      كورونا
      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      تكنولوجيا
      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ul className='nav_sublinks'>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
          <li>
            <a href="javascript:void(0)">كورونا</a>
          </li>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">الأسواق</a>
          </li>
          <li>
            <a href="javascript:void(0)">الرئيسية</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      الأسواق
      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ul className='nav_sublinks'>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      أخبار الشركات
      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ul className='nav_sublinks'>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSiven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSiven" aria-expanded="false" aria-controls="flush-collapseSiven">
      فيديو CNBC عربية      <a href="#"><i className='fa fa-angle-down'></i></a>
      </button>
    </h2>
    <div id="flush-collapseSiven" className="accordion-collapse collapse" aria-labelledby="flush-headingSiven" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ul className='nav_sublinks'>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
          <li>
            <a href="javascript:void(0)">أخبار الشركات</a>
          </li>
          <li>
            <a href="javascript:void(0)">تسجيل الدخول</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item without_collapse">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" >
      أميركا في أزمة

      </button>
    </h2>

  </div>
  <div className="accordion-item without_collapse">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" >
      اكسبو في أسبوع

      </button>
    </h2>

  </div>
</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <a
              className="nav-link active"
              aria-current="page"
              href="/breakingNews"
            >
              أخبار عاجلة
            </a> */}

          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/infographics">
              إنفوغرافيك
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/presenters">
              مذيعو ومراسلو
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/latestVideos">
              أحدث مقاطع الفيديو
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/schedules">
              جدول البرامج
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/videoNews">
              الفيديو
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              برامج CNBC عربية
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="/programs/100/">
                  اكسبو في أسبوع
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/program/95/حديث المملكة مع راشد الفوزان"
                >
                  حديث المملكة مع راشد الفوزان
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/96/تحت الضوء">
                  تحت الضوء
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/78/وثائقيات">
                  ملفات
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/90/Tech Talks">
                  Tech Talks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/89/CEO Talks">
                  CEO Talks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/61/مسار السوق">
                  مسار السوق
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/33/كلام أسواق">
                  كلام أسواق
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/87/بين قوسين">
                  بين قوسين
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/10/حوار الأسبوع">
                  حوار الأسبوع
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/program/16/برنامج بموضوعية "
                >
                  بموضوعية{' '}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/69/عين على عُمان">
                  عين على عُمان
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/program/101/صباح CNBC عربية"
                >
                  صباح CNBC عربية
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/20/عين على الكويت ">
                  عين على الكويت{' '}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/23/عين على قطر ">
                  عين على قطر{' '}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/program/94/CNBC عربية بودكاست"
                >
                  CNBC عربية بودكاست
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/17/حديث خاص ">
                  مقابلة خاصة
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/5/من حقيبة جو ">
                  حقيبة جو
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/program/92/الشجعان... قصة نجاح"
                >
                  الشجعان... قصة نجاح
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/29/مشاركة ">
                  مشاركة{' '}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/41/البوصلة">
                  البوصلة
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/43/بورصات العالم">
                  بورصات العالم
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/91/The IMPACT">
                  The IMPACT
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/program/84/خبر خام">
                  خبر خام
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoryNewsTiles">
              آخر الأخبار
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              الرئيسية
            </a>
          </li>
          <li className="nav-item">
            <a href="/liveTv" className="nav-link">
              المباشر{' '}
              <span className="youtube-icon">
                <i className="fa fa-play"></i>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/breakingNews" className="nav-link">
              عاجل
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              تسجيل الدخول
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;

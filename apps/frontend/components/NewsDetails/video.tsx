import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"
import newsImage from "../../styles/images/biden2.jpg";
import HorizontalFooter2NewsSlider from "../Shared/NewsFooter2Slider";
import styles from "./sidebarvideo.module.css";

const VideoNews = () => {

    return (
        <>
          <div className="container">
            <AdBanner/>
          <div className='row mb-3'>
                <div className='col-md-8'>
                    <div className="VideoNews mb-4">
                            <div className="NewsImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="PlayTime">
                                <h5>05:21</h5>
                                <div className="btn-text">
                                    <span>شاهد الآن</span>
                                    <button className="btn btn-warning VideoPlay">
                                        <i className="fa fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="pageSimpleTitle mb-5">
                          
                          <div className="float-start">
                            <div className="newsSocial">
                              <ul>
                                  <li><a><i className="fa fa-envelope"></i></a></li>
                                  <li><a><i className="fab fa-whatsapp"></i></a></li>
                                  <li><a><i className="fab fa-linkedin"></i></a></li>
                                  <li><a><i className="fab fa-twitter"></i></a></li>
                                  <li><a><i className="fab fa-facebook"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="float-end">
                          <h6 className="text-primary">الإمارات</h6>
                          </div>
                          <div className="clearfix"></div>
                          <h1>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h1>
                      </div>

                      <p><small>نشر الجمعة 5 نوفمبر 2021 | 10:35 صباحًا</small></p>

                      <div className="fadedNews">
                        <p>لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”.
                        </p>
                        <p>

                          وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”.
                          </p>
                        <p>
                          وقال كروز إنه “في عهد الرئيس (الأسبق) باراك أوباما ونائب الرئيس بايدن، كانت السياسات المطبقة كارثة لحلفائنا في الشرق الأوسط، ونعمة لأعدائنا. مرة أخرى، تعمل إدارة بايدن على تعزيز جماعة الإخوان والجماعات المتطرفة الأخرى في الشرق الأوسط”
                          </p>
                        <p>
                          لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”.
                          </p>
                        <p>
                          وأكد شرقاوي أن “الضغوط المستمرة من جانب النواب في الكونغرس على إدارة بايدن ستجعلها تغير سياستها تجاه الإخوان، أو تجعلها محايدة”.
                          لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”.
                          </p>
                        <p>
                          وأكد شرقاوي أن “الضغوط المستمرة من جانب النواب في الكونغرس على إدارة بايدن ستجعلها تغير سياستها تجاه الإخوان، أو تجعلها محايدة”.
                          </p>
                        <p>
                          وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”.
                          </p>
                        <p>
                          وقال كروز إنه “في عهد الرئيس (الأسبق) باراك أوباما ونائب الرئيس بايدن، كانت السياسات المطبقة كارثة لحلفائنا في الشرق الأوسط، ونعمة لأعدائنا. مرة أخرى، تعمل إدارة بايدن على تعزيز جماعة الإخوان والجماعات المتطرفة الأخرى في الشرق الأوسط”
                          </p>
                        <p>
                          لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”.
                          </p>
                        <p>
                          وأكد شرقاوي أن “الضغوط المستمرة من جانب النواب في الكونغرس على إدارة بايدن ستجعلها تغير سياستها تجاه الإخوان، أو تجعلها محايدة”.
                          </p>
                        <p>
                          وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”.
                          </p>
                        <p>
                          وقال كروز إنه “في عهد الرئيس (الأسبق) باراك أوباما ونائب الرئيس بايدن، كانت السياسات المطبقة كارثة لحلفائنا في الشرق الأوسط، ونعمة لأعدائنا. مرة أخرى، تعمل إدارة بايدن على تعزيز جماعة الإخوان والجماعات المتطرفة الأخرى في الشرق الأوسط”..
                          وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”.
                          </p>
                        <p>
                          وقال كروز إنه “في عهد الرئيس (الأسبق) باراك أوباما ونائب الرئيس بايدن، كانت السياسات المطبقة كارثة لحلفائنا في الشرق الأوسط، ونعمة لأعدائنا. مرة أخرى، تعمل إدارة بايدن على تعزيز جماعة الإخوان والجماعات المتطرفة الأخرى في الشرق الأوسط”..</p>
                                                </div>

                      <div className="page-categories">
                      <h6>العلامات</h6>
                      <ul>
                          <li><a href="">الرئيسية تسجيل الدخول </a></li>
                          <li><a href="">تسجيل الدخول </a></li>
                          <li><a href="">الرئيسية</a></li>
                          <li><a href="">الرئيسية تسجيل الدخول </a></li>
                          <li><a href="">الرئيسية</a></li>
                          <li><a href="">تسجيل الدخول </a></li>
                          <li><a href="">الرئيسية</a></li>
                          <li><a href="">الرئيسية تسجيل الدخول </a></li>
                          <li><a href="">الرئيسية</a></li>
                          <li><a href="">تسجيل الدخول </a></li>
                      </ul>
                  </div>




                </div>
                <div className='col-md-4'>
                 
                  <div className={styles.sidebar}>
                    <div className={styles.themeTitle}>
                      <h4>أحدث مقاطع الفيديو</h4>
                    </div>
                      <div className={styles.listBody}>
                        <div className="NewsList VideoTextBox">
                            <ul>
                                <li>
                                    <div className="newsText">
                                        <a href="#">النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة</a>
                                        <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsText">
                                        <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                        <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </div>
                  </div>

                


                </div>
            </div>


            <div className="mb-3">
                    <div className="yellowTitle">
                        <h3>فيديوهات ذات صلة</h3>
                    </div>
                    <HorizontalFooter2NewsSlider />
                </div>
                <div className="mb-3">
                    <div className="yellowTitle">
                        <h3>الأكثر مشاهدة</h3>
                    </div>
                    <HorizontalFooter2NewsSlider />
                </div>



            </div>
       </>
        
    
    )
}

export default VideoNews
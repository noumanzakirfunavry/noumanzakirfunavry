import { FC } from 'react';
import newsImage from '../../../styles/images/biden.jpg';
import Title from '../../Title';

const TilesWithColoredBackground: FC = () => {
    // Dynamic list
    return (
        <>
            <div className="NewsTilesBg mb-4">
                <div className="container">
                <div className="TitleBar">
                    <div className="float-start">
                        <button className="btn btn-outline-light">جميع الفيديو</button>
                        <button className="btn btn-danger me-3">شاهد البث المباشر</button>
                    </div>
                    <Title styles={'float-end'}>
                        <h2>عربية CNBC</h2>
                    </Title>
                    <div className="clearfix"></div>
                </div>
                <div className="VideoTilesContent">
                <div className="row">
                    <div className="col-lg-7 d-none d-sm-block">
                        <div className="VideoNews mb-4 mb-lg-0">
                            <div className="NewsImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="PlayTime">
                                <h5>05:21</h5>
                                <div className="btn-text">
                                    <span className='PlayButton-flyout'>شاهد الآن</span>
                                    <button className="btn btn-warning VideoPlay">
                                        <i className="fa play_big"></i>
                                        {/* <img className="img-fluid" src={playicon.src} /> */}
                                    </button>
                                </div>
                            </div>
                            <div className="NewsContent">
                                <h4>
                                    بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم
                                    توقيع ترامب خطة التحفيز الاقتصادي{' '}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-4 col-lg-12">
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <button className="btn btn-warning VideoPlay">
                                                    <i className="fa play_small"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة{' '}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-12">
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <button className="btn btn-warning VideoPlay">
                                                    <i className="fa play_small"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة بايدن: سيفقد حوالى 10 ملايين أميركي إعانات {' '}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-12">
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <button className="btn btn-warning VideoPlay">
                                                    <i className="fa play_small"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة{' '}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>


        </>
    );
};

export default TilesWithColoredBackground;

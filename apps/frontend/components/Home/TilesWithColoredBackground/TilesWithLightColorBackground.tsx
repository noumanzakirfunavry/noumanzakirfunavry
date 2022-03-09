import { FC } from 'react';
import newsImage from '../../../styles/images/biden.jpg';
import Title from '../../Title';

const TilesWithLightColorBackground: FC = () => {
    // Dynamic list
    return (
        <>


            <div className="NewsLightTiles">
               <div className="container">
               <Title styles={'TitleBar'}>
                    <div className="text-end">
                        <h2>انفوغرافيك</h2>
                    </div>
                </Title>
                <div className="videoNewsContent">
                    <div className="row">
                        <div className="col-lg-7 d-none d-sm-block">
                            <div className="VideoNews mb-4 mb-lg-0">
                                <div className="NewsImage">
                                    <img className="img-fluid" src={newsImage.src} />
                                </div>
                                <div className="NewsContent">
                                    <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
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
                                        </div>
                                        <div className="NewsContent">
                                                <h4>

                                                بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة </h4>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-12">
                                    <div className="VideoTiles">
                                        <div className="VideoNews">
                                            <div className="NewsImage">
                                                <img className="img-fluid" src={newsImage.src} />
                                            </div>
                                        </div>
                                        <div className="NewsContent">
                                                <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة بايدن: سيفقد حوالى 10 ملايين أميركي إعانات  </h4>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-12">
                                    <div className="VideoTiles">
                                        <div className="VideoNews">
                                            <div className="NewsImage">
                                                <img className="img-fluid" src={newsImage.src} />
                                            </div>

                                        </div>
                                        <div className="NewsContent">
                                                <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة </h4>
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

export default TilesWithLightColorBackground;

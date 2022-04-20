import { useEffect, useState } from 'react';
import { GetArabicFormattedDateAndTime } from '../../../services/Util';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton
} from 'next-share';

/*import {
  TwitterShareButton,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount
} from "react-share";*/

import { useRouter } from 'next/router';

const NewsInfoBox = ({ news }) => {
  const [dateCreatedArabicFormat, setDateCreatedArabicFormat] = useState<string>('');
  const [dateUpdatedArabicFormat, setDateUpdatedArabicFormat] = useState<string>('');
  
  //build url
  const { asPath } = useRouter();
  const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

  const URL = `${origin}${asPath}`;

  //console.log(URL);

  useEffect(() => {
    const createdAt = news?.createdAt;
    const updatedAt = news?.updatedAt;
    const dateCreatedRes = news?.createdAt && GetArabicFormattedDateAndTime(createdAt);
    const dateUpdatedRes = news?.updatedAt && GetArabicFormattedDateAndTime(updatedAt);
    dateCreatedRes && setDateCreatedArabicFormat(dateCreatedRes);
    dateUpdatedRes && setDateUpdatedArabicFormat(dateUpdatedRes);

  }, [news]);

  console.log('Img', news?.image?.url);

  return (
    <>
      <div className="NewsInfobox">
        <div className="infoItem">نشر{dateCreatedArabicFormat}</div>
        <div className="infoItem">تم تحريره {dateUpdatedArabicFormat}</div>
        <div className="newsSocial mt_sm_20">
          <ul>
            {/*<li><a><i className="fa fa-envelope"></i></a></li>
                        <li><a><i className="fab fa-whatsapp"></i></a></li>
                        <li><a><i className="fab fa-linkedin"></i></a></li>
                        <li><a><i className="fab fa-twitter"></i></a></li>
    <li><a><i className="fab fa-facebook"></i></a></li>*/}

    {/* react-share // TODO: uncomment it to test with React share
    <li><TwitterShareButton
              url={URL}
              title={`${news?.title} ${news?.image?.url}`}
              media={news.image.url}
              className="m-2">
              <a>
                  <i className="fab fa-twitter"></i>
                </a>
  </TwitterShareButton></li>*/}

            <li>
              <EmailShareButton
                url={URL}
                subject={news?.title}
                body={news?.description}
              >
                <a>
                  <i className="fa fa-envelope"></i>
                </a>
              </EmailShareButton>
            </li>

            <li>
              <WhatsappShareButton
                url={URL}
                title={news?.title}
                separator=":: "
              >
                <a>
                  <i className="fab fa-whatsapp"></i>
                </a>
              </WhatsappShareButton>
            </li>
            
            <li>
              <LinkedinShareButton
                url={URL}
              >
                <a>
                  <i className="fab fa-linkedin"></i>
                </a>
              </LinkedinShareButton>
            </li>

            <li>
              <TwitterShareButton
                url={URL}
                title={news?.title}
              >
                <a>
                  <i className="fab fa-twitter"></i>
                </a>
              </TwitterShareButton>
            </li>

            <li>
              <FacebookShareButton
                url={URL}
                quote={news?.title}
                hashtag={'#cnbc'}
              >
                <a>
                  <i className="fab fa-facebook"></i>
                </a>
              </FacebookShareButton>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewsInfoBox;

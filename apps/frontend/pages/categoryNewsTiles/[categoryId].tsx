/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import AdBanner from 'apps/frontend/components/Shared/AdBanner/AdBanner';
import CategoryNewsSection from 'apps/frontend/components/Shared/CategoryNews';
import SideBar from 'apps/frontend/components/Shared/SideBar/SideBar';
import Title from 'apps/frontend/components/Title';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { CategoryMainProps } from "apps/frontend/types/Types";
import GetData from '../../services/GetData';
import { requests } from '../../services/Requests';
import SkeletonLoader from 'apps/frontend/components/Shared/SkeletonLoader/SkeletoLoader';
import Link from 'next/link';

const NewsCategoryPage = () => {
  const router = useRouter();

  //console.log(typeof(router.query.categoryId));

  // const [category, setCategory] = useState<CategoryMainProps>({
  const [category, setCategory] = useState<any>({})
  // id: router.query.categoryId,
  // title: '',
  // subCategory: [{ // TODO: will be updated when actual params can be checked once api: getCategoryById is done
  //   title: '',
  //   subCategoryId: null
  // }]

  // });


  useEffect(() => {
    GetData(`${requests.categories}/getById/${router.query.categoryId}`, {}, 'get', false).then(res => {
      //console.log(res);
      setCategory(res?.data?.response?.category);

    }).catch(err => {
      console.warn(err)
    })

  }, [router.query.categoryId]);

  return (
    <>
      <div className="container">
        <AdBanner />
      </div>
      <Title styles={'pageTitle PageTitleYellow'}>
        <h2>{category?.title}</h2>
      </Title>

      <div className="container">
        <ul className="category_news_tab">
          {category && category?.sub?.map((cat: any) => {
            return (
              <li key={cat.id}>
                <Link href={`/subCategoryNews/` + cat.id}>    
                  <a>{cat.title}</a>
                </Link>
              </li>
            )
          })}

          {/* <li>
            <a href="javascript:void(0)">????????????????</a>
          </li>
          <li>
            <a href="javascript:void(0)">??????</a>
          </li> */}
        </ul>
        {
          !category && <SkeletonLoader />
        }
        {
          category && category.id &&

          <div className="PageBuilder-pageRow">
            <div className="PageBuilder-col-9">

              <CategoryNewsSection
                cat={category}
                limit={11}
                displayTitle={false}
                displayTopTwoNews={true}
                displayMoreButton={false}
                loopIndex={2}
                extended={false}
              />
              {category && category?.sub?.map((cat: any) => {
                return ( <CategoryNewsSection
                  key={cat.id}
                  cat={cat}
                  limit={5}
                  displayTitle={true}
                  displayTopTwoNews={true}
                  displayMoreButton={false}
                  loopIndex={2}
                  extended={false}
                />)
              })}
             
              {/* <CategoryNewsSection
                cat={category}
                limit={3}
                displayTitle={true}
                displayTopTwoNews={true}
                displayMoreButton={false}
              />
              <CategoryNewsSection
                cat={category}
                limit={5}
                displayTitle={true}
                displayTopTwoNews={false}
                displayMoreButton={true}
              /> */}

              <CategoryNewsSection
                cat={category}
                limit={20}
                displayTitle={true}
                displayTopTwoNews={false}
                displayMoreButton={true}
                loopIndex={11}
                extended={true}
              />    
            </div>

            <div className="PageBuilder-sidebar">
              <SideBar
                sideBarSequence={[
                  {
                    componentType: 'numbered',
                    position: 1,
                    title: '???????????? ????????????',
                  },
                  { componentType: 'SmallBanner', position: 2 },
                  { componentType: 'simple', position: 2, title: '???????????? ??????????' },
                  { componentType: 'LargeBanner', position: 2 },
                ]}
              />
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default NewsCategoryPage;

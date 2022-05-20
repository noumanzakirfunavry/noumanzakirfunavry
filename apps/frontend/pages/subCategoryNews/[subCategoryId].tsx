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

const SubCategoryNewsPage = () => {
  const router = useRouter();

  const [category, setCategory] = useState<any>({});
  

  useEffect(() => {
    GetData(`${requests.categories}/getById/${router.query.subCategoryId}`, {}, 'get', false).then(res => {
      setCategory(res?.data?.response?.category);

    }).catch(err => {
      console.warn(err)
    })

  }, [router.query.subCategoryId]);

  return (
    <>
      <div className="container">
        <AdBanner />
      </div>
      <Title styles={'pageTitle PageTitleYellow'}>
        <h2>{category?.title}</h2>
      </Title>

      <div className="container">
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
                    title: 'الأكثر تداولا',
                  },
                  { componentType: 'SmallBanner', position: 2 },
                  { componentType: 'simple', position: 2, title: 'الأكثر قراءة' },
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

export default SubCategoryNewsPage;

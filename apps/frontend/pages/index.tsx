import Home from '../components/Home/Home';
import MarketIndices from '../components/Home/MarketIndices/MarketIndices';
import SideBar from '../components/Shared/SideBar/SideBar';
import styles from './index.module.css';
import ad from '../styles/images/ad-970.jpg';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <Home/>
      <SideBar sideBarSequence={[{componentType:'Latest', position:2}, {componentType:'SmallBanner', position:1}]}/>
      

      <div className="container-fluid">     
            
            <div className="text-center mb-4">
                <img className="img-fluid" src={ad.src} />
            </div>
            
            
            <div className="page-categories">
                <ul>
                    <li>روابط سريعة</li>
                    <li><a href="javascript:voide(0)">الرئيسية تسجيل الدخول </a></li>
                    <li><a href="javascript:voide(0)">تسجيل الدخول </a></li>
                    <li><a href="javascript:voide(0)">الرئيسية</a></li>
                    <li><a href="javascript:voide(0)">الرئيسية تسجيل الدخول </a></li>
                    <li><a href="javascript:voide(0)">الرئيسية</a></li>
                    <li><a href="javascript:voide(0)">تسجيل الدخول </a></li>
                </ul>
            </div>
            

           

        </div>

    </div>
  );
}

export default Index;

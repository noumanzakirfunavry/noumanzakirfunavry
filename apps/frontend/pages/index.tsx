import MarketIndices from '../components/Home/MarketIndices/MarketIndices';
import SideBar from '../components/Shared/SideBar/SideBar';
import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <MarketIndices/>
      <SideBar sideBarSequence={[{componentType:'Latest', position:2}, {componentType:'SmallBanner', position:1}]}/>
    </div>
  );
}

export default Index;

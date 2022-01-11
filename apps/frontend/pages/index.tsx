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
      

      <div className="container-fluid">
            <div className="page-nav">

                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown2">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="javascript:voide(0)">العربية</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">أوروبا</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="javascript:voide(0)">أميركا</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">العملات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">النفط والطاقة</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">آسيا</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">العملات الرقمية</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">المعادن</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:voide(0)">السلع الزراعية</a>
                            </li>

                        </ul>
                    </div>
                </nav>


            </div>
            
            
            
            <div className="market-stats">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <div className="marketBox bg-danger">
                            <table className="table table-borderless table-sm">
                                <tr>
                                    <th style={{width:'40%'}}>برنت</th>
                                    <th>13,370.24</th>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-caret-down"></i></td>
                                    <td>-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5:55:00 PM GMT +3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="marketBox bg-danger">
                            <table className="table table-borderless table-sm">
                                <tr>
                                    <th style={{width:'40%'}}>برنت</th>
                                    <th>13,370.24</th>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-caret-down"></i></td>
                                    <td>-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5:55:00 PM GMT +3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="marketBox bg-danger">
                            <table className="table table-borderless table-sm">
                                <tr>
                                    <th style={{width:'40%'}}>برنت</th>
                                    <th>13,370.24</th>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-caret-down"></i></td>
                                    <td>-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5:55:00 PM GMT +3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="marketBox bg-success">
                            <table className="table table-borderless table-sm">
                                <tr>
                                    <th style={{width:'40%'}}>برنت</th>
                                    <th>13,370.24</th>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-caret-up"></i></td>
                                    <td>-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5:55:00 PM GMT +3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="marketBox bg-success">
                            <table className="table table-borderless table-sm">
                                <tr>
                                    <th style={{width:'40%'}}>برنت</th>
                                    <th>13,370.24</th>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-caret-up"></i></td>
                                    <td>-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5:55:00 PM GMT +3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="marketBox bg-success">
                            <table className="table table-borderless table-sm">
                                <tr>
                                    <th style={{width:'40%'}}>برنت</th>
                                    <th>13,370.24</th>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-caret-up"></i></td>
                                    <td>-0.93   -1.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5:55:00 PM GMT +3</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
            
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

import { SideListProps } from "apps/frontend/types/Types"
import styles from "./sidelist.module.css";
import { FC } from "react"

const SideList:FC<SideListProps> = ({type}) =>{
    return (
        <>
        <div className={styles.sidebar}>
          <div className={styles.themeTitle}>
            <h4>آخر الأخبار</h4>
          </div>
            <div className={styles.listBody}>

            
              {
                type === "numbered" && (
                  <>
                    <ul className={styles.sidenumberList}>
                      <li key={'12'} ><a href="#">
                        <span>منذ 5 دقائق</span>
                        أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية 
                        لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين 
                        أميركي إعانات البطالة ثر من المتوقع  
                        </a></li>
                        <li key={'343'}><a href="#">
                        <span>قبل 30 دقيقة</span>
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                        <li key={'675'}><a href="#">
                        <span>منذ 1 ساعة</span>
                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة 
                        </a></li>
                        <li key={'34543'}><a href="#">
                        <span>منذ 5 ساعات</span>
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                        <li key={'fdw43'}><a href="#">
                        <span>منذ 5 دقائق</span>
                        أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية 
                        لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين 
                        أميركي إعانات البطالة ثر من المتوقع  
                        </a></li>
                        <li key={'fd43re3f'}><a href="#">
                        <span>قبل 30 دقيقة</span>
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                        <li key={'sdf43t'}><a href="#">
                        <span>منذ 1 ساعة</span>
                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة 
                        </a></li>
                        <li key={'sdf54'}><a href="#">
                        <span>منذ 5 ساعات</span>
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                    </ul>
                  </>
                )
              }
              {
                type === "simple" && (
                  <>Simple</>
                )
              }
            </div>
        </div>
          
        </>
    )
}

export default SideList
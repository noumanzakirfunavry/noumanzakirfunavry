import { FC } from "react"

const PageCatgories: FC<{tags:Array<any>}> = ({tags}) => {

    return (
        <div className="page-categories">
            <h6>العلامات</h6>
            <ul>
                {tags && tags.map((tag,index)=>{
                   return(
<li key={index}><a >{tag?.title}</a></li>
                   ) 
                })}
                {/* <li><a href="">تسجيل الدخول </a></li>
                <li><a href="">الرئيسية</a></li>
                <li><a href="">الرئيسية تسجيل الدخول </a></li>
                <li><a href="">الرئيسية</a></li>
                <li><a href="">تسجيل الدخول </a></li>
                <li><a href="">الرئيسية</a></li>
                <li><a href="">الرئيسية تسجيل الدخول </a></li>
                <li><a href="">الرئيسية</a></li>
                <li><a href="">تسجيل الدخول </a></li> */}
            </ul>
        </div>
    )
}

export default PageCatgories
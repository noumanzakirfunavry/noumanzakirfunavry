import { FC } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookiesComponent: FC<any> = () =>{

  return (
    <>
    <CookieConsent
      location="bottom"
      buttonText="موافق"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#071D39" }}
      buttonStyle={{ color: "#002F6C", fontSize: "16px", padding:"0.375rem 0.75rem" }}
      expires={150}
      // acceptOnScroll={true}
      // acceptOnScrollPercentage={60}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          alert("Accept was triggered by user scrolling");
        } else {
          alert("Accept was triggered by clicking the Accept button");
        }
      }}
      onDecline={() => {
        alert("No!!");
      }}
    >
      <div className="container-fluid">
          <h5>سياسة ملفات الارتباط</h5>
          <p>ملف تعريف الارتباط هو نص صغير يتم إرساله إلى متصفحك من الموقع الإلكتروني الذي تتم زيارته. ويساعد هذا الملف الموقع الإلكتروني في تذكّر معلومات عن زيارتك، ما يسهّل زيارة الموقع مرّة أخرى ويتيح لك الاستفادة منه بشكل أفضل.</p>
          <div className="text-center">
            <button className="btn btn-warning mb-3">موافق</button>
            <br></br>
            <a className="text-warning">سياسية الخصوصية</a>
          </div>
        </div>
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      
        </CookieConsent>
    </>
  )
}

export default CookiesComponent

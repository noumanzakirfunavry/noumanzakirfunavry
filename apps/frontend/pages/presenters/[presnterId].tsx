/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import PresenterDetails from "apps/frontend/components/Presenter/details";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import Title from "apps/frontend/components/Title";
const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                </div>
                <div className="presenter_detail">
                <Title styles={"pageTitle PageTitleYellow"}>
                    <h2>مذيعة ومراسل قناة CNBC العربية</h2>
                </Title>
                <div className="container">
                <PresenterDetails/>
            </div>
                </div>

        </>
    )
}

export default Index
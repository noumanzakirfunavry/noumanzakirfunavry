/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import Schedules from "apps/frontend/components/Schedules"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                </div>
                <Title styles={"pageTitle PageTitleYellow program_schedule "}>
                    <div className="container">
                    <div className="float-start">
                        <button className="btn btn-danger">شاهد البث المباشر</button>
                    </div>
                    <h2>جدول البرامج</h2>
                    <div className="clearfix"></div>
                    </div>
                </Title>
                <div className="container">
                <Schedules/>
            </div>
        </>
    )
}

export default Index
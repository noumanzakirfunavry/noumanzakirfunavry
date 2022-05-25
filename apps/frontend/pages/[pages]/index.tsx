/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
const Index = () => {

    return (
        <>
            <div className="container">
                <AdBanner />


                <div className="primaryTitle mt-5">
                    <h3>معذرةً ، الصفحة التي تبحث عنها لا يمكن العثور عليها.</h3>
                </div>
                <iframe id="highstockChart" scrolling="no" src="https://cnbc-config.cnbcarabia.com/zagTrader/api/SimpleChart.php?token=tickerId=13205token=28551e7239fb7388e775b1c3a2a47dc8"></iframe>
            </div>

        </>
    )
}

export default Index
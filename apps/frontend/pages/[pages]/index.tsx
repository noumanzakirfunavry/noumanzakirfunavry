/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
const Index = () =>{

    return (
        <>
        <div className="container">
            <AdBanner />
            <div className="primaryTitle mt-5">
                <h3>معذرةً ، الصفحة التي تبحث عنها لا يمكن العثور عليها.</h3>
            </div>
        </div>

        </>
    )
}

export default Index
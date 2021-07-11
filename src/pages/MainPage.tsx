import Layout from "../parts/Layout";
import ServiceTypeView from "../parts/main-page/ServiceTypeView";
import CommentsView from "../parts/main-page/CommentsView";
import VisitInfoView from "../parts/main-page/VisitInfoView";

export default function MainPage() {
    return (
        <Layout>
            <ServiceTypeView/>
            <VisitInfoView/>
            <CommentsView/>
        </Layout>
    );
}
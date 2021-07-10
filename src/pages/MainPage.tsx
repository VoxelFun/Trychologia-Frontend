import Layout from "../parts/Layout";
import ServiceTypeView from "../parts/main-page/ServiceTypeView";
import CommentsView from "../parts/main-page/CommentsView";

export default function MainPage() {
    return (
        <Layout>
            <ServiceTypeView/>
            <CommentsView/>
        </Layout>
    );
}
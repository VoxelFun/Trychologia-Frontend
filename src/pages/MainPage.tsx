import Layout from "../parts/Layout";
import ServiceTypeView from "../parts/main-page/ServiceTypeView";
import VisitsPickerView from "../parts/main-page/VisitsPickerView";
import CommentsView from "../parts/main-page/CommentsView";

export default function MainPage() {
    return (
        <Layout>
            <ServiceTypeView/>
            <VisitsPickerView/>
            <CommentsView/>
        </Layout>
    );
}
import { Col, Row } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { BlogTopics } from "../data/Blog";
import BlogMenu from "../parts/blog/BlogMenu";
import TextSection from "../parts/blog/TextSection";
import Layout from "../parts/Layout";
import { SectionContainer } from "../parts/main-page/Section";
import { Card } from "../parts/styled/Card";


interface Props extends RouteComponentProps<any> {
    topicId?: string;
}

function BlogPage(props: Props) {
    const topicId = props.topicId || BlogTopics[0].id;

    function redirect(topicId: string) {
        props.history.replace(`/blog/${topicId}/`);
    }

    return (
        <Layout>
            <SectionContainer>
                <Row xs={1} md={2}>
                    <Col md={4}>
                        <BlogMenu
                            topicId={topicId}
                            redirect={redirect}
                        />
                    </Col>
                    <Card.Container md={8}>
                        <TextSection blog={BlogTopics.find(blogTopic => blogTopic.id === topicId)!}/>
                    </Card.Container>
                </Row>
            </SectionContainer>
        </Layout>
    );
}

export default withRouter(BlogPage);
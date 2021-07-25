import { Card } from "../parts/styled/Card";
import { SectionBody, SectionContainer, SectionHeader } from "../parts/main-page/Section";
import Layout from "../parts/Layout";

export default function PolicyPage() {
    return (
        <Layout>
            <SectionContainer>
                <SectionHeader>
                    Polityka prywatności
                </SectionHeader>
                <SectionBody>
                    <Card.Container>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card.Container>
                </SectionBody>
            </SectionContainer>
        </Layout>
    );
}
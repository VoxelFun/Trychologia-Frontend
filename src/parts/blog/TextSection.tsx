import React from "react";
import styled from "styled-components";
import { Blog } from "../../data/Blog";
import { Card } from "../styled/Card";

export interface TextSectionProps {
    blog: Blog;
}

export default abstract class TextSection extends React.PureComponent<TextSectionProps> {

    render() {
        const {blog} = this.props;

        return (
            <div>
                <Card.Header>{blog.title}</Card.Header>
                <Card.Body>
                    {blog.text}
                </Card.Body>
                <Card.Footer>
                    <div>Źródła:</div>
                    {blog.sources.map(source => (
                        <div>
                            <a href={source}>{source}</a>
                        </div>
                    ))}
                </Card.Footer>
            </div>
        );
    }

    abstract Content(): JSX.Element;

}

export const TreatmentComp = {
    Paragraph: styled.p`
        text-indent: 2em;
    `,
};
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
                {blog.sources && (
                    <Card.Footer>
                        <div>Źródła:</div>
                        {blog.sources.map(source => (
                            <Source>
                                <a href={source}>{source}</a>
                            </Source>
                        ))}
                    </Card.Footer>
                )}
            </div>
        );
    }

    abstract Content(): JSX.Element;

}

const Source = styled.div`
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;
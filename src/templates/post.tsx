/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */

import { graphql } from "gatsby";
import React from 'react';
type PageContext = {
    data:{
        ghostPost: {
            id: string,
            title: string,
            slug: string,
            html: string,
            plaintext: string,
            published_at: string
        }
    }
    
};
const PostTemplate: React.FC<PageContext> = ({data}) => {
    const {title, slug, html, plaintext} = data.ghostPost
    console.log(`received title:${data.ghostPost.title} and slug ${data.ghostPost.slug}`)

    return (<div>
                <h1>Title: {title}
                </h1>
                <h1>{plaintext}
                </h1>
        </div>);
};
export default PostTemplate;

export const postQuery = graphql`
    query ($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            id
            title
            slug
            html
            plaintext
            published_at
        }
    }
`;

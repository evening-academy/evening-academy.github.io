import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet';

import "./Article.css"

export default function Article(props) {
    let {
        id,
        title,
        shortTitle,
        fileName,
        weight,
        date = "16.02.2022",
        tags,
        language,
        description,
        readTime,
        author,
    } = props;
    // 'js-settimeout-setinterval'
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../../markdown/${fileName}.md`)
            .then(res => {

                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res));
            })
            .catch(err => console.log(err));
    }, []);

    const result = (
        <MarkDown>
            {post}
        </MarkDown>
    );
    return (
        <>
            <Helmet>
                <title>{props.title || "article"}</title>
                <meta name="description" content={props.description || "test-description"} />
                <meta name="theme-color" content="#000000" />
            </Helmet>
            <article>
                {result}
            </article>
        </>
    );
}

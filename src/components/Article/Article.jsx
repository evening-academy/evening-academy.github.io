import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';

export default function Article() {

    const file_name = 'test.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../../markdown/${file_name}`)
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
        <article>
            {result}
        </article>
    );
}

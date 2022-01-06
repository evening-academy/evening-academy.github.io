import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';

const test = "markdown-test-file";


export default function useConvert(fileName = test) {
    let pathBuilder = `./markdown/${fileName}.md`;
    let markdownPost = useGetSource(pathBuilder);
    let resultReactComponent = markdownToReactComponent(markdownPost);
    return resultReactComponent;
}

function markdownToReactComponent(post) {
    return (
        <MarkDown>
            {post}
        </MarkDown>
    );
}

function useGetSource(fileName) {
    const [post, setPost] = useState('');
    useEffect(() => {
        import(fileName)
            .then(res => {

                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res));
            })
            .catch(err => console.log(err));
    }, []);
    console.log(post)
    return post;
}

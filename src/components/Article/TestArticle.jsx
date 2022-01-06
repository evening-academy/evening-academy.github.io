import React from 'react'
import useConvert from '../../store/markdownConverter';

export default function TestArticle() {
    let element = useConvert();
    return (
        <div>
            {element}
        </div>
    )
}

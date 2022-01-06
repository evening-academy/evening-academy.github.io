import React from 'react';
import { Link } from "react-router-dom";
import TestArticle from '../Article/TestArticle';

export default function Contact() {
    return (
        <div className='page'>
            <TestArticle />
            <h2>Обратная связь и о проекте</h2>
            <p>На начало 2022 года я Software Engineer в фирме EPAM. В свободное от работы и развлечений время я веду этот проект. Прошу понять и простить, если информации недостаточно, устаревшая или неточная.</p>
            <p>Я даю частные уроки <b>взрослым</b> "Введение в программирование", на базе языка Java или JavaScript. Ударение на слово взрослым. Я даю знания тем, кто их хочет получить.</p>
            <h3>Отзывы</h3>
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/fdiwUGANgOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            <h3>Обратная связь</h3>
            <address>
                <ul>
                    <li>
                        linkedin.com: <a href="https://www.linkedin.com/in/ptchom/">linkedin.com/in/ptchom</a>
                    </li>
                    <li>
                        Github: <a href="https://github.com/andron13">github.com/andron13</a>
                    </li>
                    <li>
                        Telegram: <a href="https://t.me/ptchom">t.me/ptchom</a>
                    </li>
                </ul>
            </address>
        </div>
    )
}

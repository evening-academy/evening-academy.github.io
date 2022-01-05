import React, { useState, useEffect, useRef } from 'react'

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function getDate(userDate = (new Date())) {
    let dd = String(userDate.getDate()).padStart(2, '0');
    let mm = String(userDate.getMonth() + 1).padStart(2, '0');
    let yyyy = userDate.getFullYear();
    return dd + '.' + mm + '.' + yyyy;
}

function getTime(userDate = (new Date())) {
    return String(userDate.getHours()).padStart(2, '0') + ":"
        + String(userDate.getMinutes()).padStart(2, '0') + ":"
        + String(userDate.getSeconds()).padStart(2, '0');
}

export default function Timer() {
    const [dateNow, setDateNow] = useState(getDate());
    const [timeNow, setTimeNow] = useState(getTime());

    useInterval(() => {
        setDateNow(getDate());
        setTimeNow(getTime());
    }, 1000);


    return (
        <section className='timer'>
            <p>Сейчас: {timeNow} / {dateNow}</p>
        </section>
    )
}

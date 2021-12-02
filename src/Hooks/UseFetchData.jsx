import {useEffect, useState} from "react";

export function useFetchData(endpoint, initialState = []) {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cancelablePromise = makeCancelable(fetch(endpoint))
        cancelablePromise.promise
            .then(data => data.json())
            .then(data => {
                setState(data.data)
                setLoading(false)
            })
            .catch(error => {})

        return () => cancelablePromise.cancel()
    }, [endpoint])

    return [state, loading]
}

// https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
// Avoid memory leaks when unmounted a component
function makeCancelable(promise) {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
            error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
}
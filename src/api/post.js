import { rootServer } from './rootServer'

async function post(data, uri) {
    const url = rootServer + uri

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
        .catch(error => console.warn(error))
}

export default post
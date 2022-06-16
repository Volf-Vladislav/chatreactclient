import { rootServer } from './rootServer'

async function get(uri) {
    const url = rootServer + uri

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
        .catch(error => console.warn(error))
}

export default get
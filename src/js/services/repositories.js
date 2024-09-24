import {baseUrl, repostitoriesQuantity } from '../variables.js'


async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repostitoriesQuantity}`)
    return await response.json()   
}

export { getRepositories }
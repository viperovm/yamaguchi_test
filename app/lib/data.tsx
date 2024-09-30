'use server'

export async function fetchJokes(query: string) {

    const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    return res.json()
}
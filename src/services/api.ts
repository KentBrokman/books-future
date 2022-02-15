import axios from "axios";

export const instance = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/`
});

export interface QueryDataType {
    query: string,
    startIndex: number,
    sortBy: string,
    category: string
}

export const booksApi = {
    async fetchBooks(queryData: QueryDataType): Promise<any> {
        const {data} = await instance.get(`volumes?q=${queryData.query}${queryData.category !== 'all' ? `+subject:${queryData.category}` : ''}&startIndex=${queryData.startIndex}&maxResults=30&orderBy=${queryData.sortBy}&key=AIzaSyDtLMEoD3OZPrs19GH8A_NQ1DroIkReKCs`)
        delete data.kind
        return data
    },
}
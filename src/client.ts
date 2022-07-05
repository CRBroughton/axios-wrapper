import axios from 'axios'
import type { IHttpClient, IHttpClientRequestParameters, ResponseData } from './types'

export class HttpClient implements IHttpClient {
  get<T>(params: IHttpClientRequestParameters): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url } = params

      axios.get(url).then(response => resolve(response.data as T))
        .catch(response => reject(response))
    })
  }
}

const httpClient = new HttpClient()

const fetchItems = (): Promise<ResponseData[]> => {
  const getParams: IHttpClientRequestParameters = {
    url: 'https://www.songsterr.com/a/ra/songs.json?pattern=Marley',
  }

  return httpClient.get(getParams)
}

// eslint-disable-next-line no-console
console.log(fetchItems().then((items) => { console.log(items) }))

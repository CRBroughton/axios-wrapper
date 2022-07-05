export interface IHttpClient {
  get<T, U>(params: IHttpClientRequestParameters<U>): Promise<T>
}

export interface IHttpClientRequestParameters<T> {
  url: string
  payload?: T
}

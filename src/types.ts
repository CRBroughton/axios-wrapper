export interface IHttpClient {
  get<T>(params: IHttpClientRequestParameters): Promise<T>
}

export interface IHttpClientRequestParameters {
  url: string
  // payload?: T
}

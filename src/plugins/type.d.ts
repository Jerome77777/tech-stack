import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface HttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: HttpRequestConfig) => void
  beforeResponseCallback?: (response: HttpResponse) => void
}

export interface HttpResponse extends AxiosResponse {
  config: HttpRequestConfig
}

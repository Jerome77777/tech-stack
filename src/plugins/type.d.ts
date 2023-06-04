import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface HttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: HttpRequestConfig) => void
  beforeResponseCallback?: (response: HttpResponse) => void
}

export interface HttpResponse extends AxiosResponse {
  config: HttpRequestConfig
}

export interface ApiMeta {
  name: string
  path: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  description: string
}

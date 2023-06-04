import axios, { AxiosError, type AxiosRequestConfig, type AxiosRequestHeaders } from 'axios'

import { NProgressInstance } from '@/utils/progress'
import type { HttpRequestConfig, HttpResponse } from './type'
import { ElMessage } from 'element-plus'

function getAxiosHeaders(): AxiosRequestHeaders {
  const headers: AxiosRequestHeaders = {} as AxiosRequestHeaders
  return headers
}

const AXIOS_DEFAULT_CONFIG: AxiosRequestConfig = {
  timeout: 20000,
  headers: getAxiosHeaders(),
  baseURL: '/rest'
}

export const httpclient = axios.create(AXIOS_DEFAULT_CONFIG)

httpclient.interceptors.request.use(
  // @ts-ignore
  (config: HttpRequestConfig) => {
    NProgressInstance.start()
    if (typeof config.beforeRequestCallback === 'function') {
      config.beforeRequestCallback(config)
      return config
    }
    return config
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

httpclient.interceptors.response.use(
  (res: HttpResponse) => {
    const config = res.config
    NProgressInstance.done()
    if (typeof config.beforeResponseCallback === 'function') {
      config.beforeResponseCallback(res)
      return res.data
    }
    const data = res.data.data
    if (res.data.status_code === 200) {
      return data
    } else {
      ElMessage.error(data.msg)
    }
  },
  (resErr: AxiosError<{ code: string; msg: string }>) => {
    NProgressInstance.done()
    console.error(resErr)
    ElMessage.error(resErr.message)
  }
)

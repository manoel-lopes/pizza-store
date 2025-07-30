export type HttpClient = {
  get<T>(url: string, params?: string): Promise<T>
  post<T, Q = void>(url: string, body?: T): Promise<Q | undefined>
  put<T>(url: string, body: T): Promise<T>
  patch<T>(url: string, body: T): Promise<T>
  delete<T>(url: string, data?: T): Promise<void>
}

import 'whatwg-fetch'


export interface PageQuery {
    page?: number
    take?: number
    q?: string

    [key: string]: any
}

export interface OrderablePageQuery<OrderBy> extends PageQuery {
    orderBy?: OrderBy
}

export interface PageMetaData {
    page: number
    take: number
    itemCount: number
    pageCount: number
}

export interface PageData<T> {
    data: T[]
    meta: PageMetaData
}

export type ErrorHandler = (error: ResponseError) => void

export class ResponseError {
    private readonly timer: any

    constructor(public response: Response, errorHandler?: ErrorHandler) {
        this.timer = setTimeout(() => {
            if (errorHandler) {
                errorHandler(this)
            }

            console.error(this.response)
        }, 100)
    }

    preventDefault(): void {
        clearTimeout(this.timer)
    }
}

export class ApiClient {

    errorHandler?: ErrorHandler


    private get headers(): Headers | undefined {
        const headers: Record<string, string> = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }

        return new Headers(headers)
    }

    private async fetch<T>(url: string, request: RequestInit): Promise<T> {
        const response = await window.fetch(url, {
            headers: this.headers,
            ...request,
        })

        if (response.ok) {
            const rawResponse = await response.text()
            return JSON.parse(rawResponse || '{}') as T
        }

        throw new ResponseError(response, this.errorHandler)
    }

    async get<T>(url: string): Promise<T> {
        return this.fetch(url, {})
    }
}

import 'reflect-metadata'
import { DtoDescriptionKey } from '../dto-description'
import { AttributesBase, JsonapiObject } from '../jsonapi-object'
import { FilterPhrase, JsonapiObjectType, SortPhrase } from './data-store'

export interface PageNumberSize {
  number: number
  size: number
}
export interface PageOffsetLimit {
  offset: number
  limit: number
}
export interface PageCursor {
  cursor: number
}

export function isPageNumberSize(pg: PageNumberSize | PageOffsetLimit | PageCursor): pg is PageNumberSize {
  return (pg as PageNumberSize).number !== undefined
}
export function isPageOffsetLimit(pg: PageNumberSize | PageOffsetLimit | PageCursor): pg is PageOffsetLimit {
  return (pg as PageOffsetLimit).offset !== undefined
}

export function isPageCursor(pg: PageNumberSize | PageOffsetLimit | PageCursor): pg is PageCursor {
  return (pg as PageCursor).cursor !== undefined
}

// export type Pager = PageNumberSize | PageOffsetLimit | PageCursor;

export function isOneObject<T>(oneOrMany: T[] | T): oneOrMany is T {
  return !((oneOrMany as T) instanceof Array)
}

export function isModelInstance<E extends AttributesBase, T extends JsonapiObject<E>>(
  model: JsonapiObjectType<E, T> | T
): model is T {
  return (model as T).type !== undefined
}

function getPagerParams(page: PageCursor | PageNumberSize | PageOffsetLimit): string {
  // let tpage: Pager;
  let pagestr = ''
  if (isPageNumberSize(page)) {
    pagestr = `page[number]=${page.number}&page[size]=${page.size}`
  } else if (isPageOffsetLimit(page)) {
    pagestr = `page[offset]=${page.offset}&page[limit]=${page.limit}`
  } else if (isPageCursor(page)) {
    pagestr = `page[cursor]=${page.cursor}`
  } else {
    throw new Error('Unexpected page format.')
    // silent.
  }

  return pagestr
}

function getFilterParams(filter: FilterPhrase | FilterPhrase[]): string {
  let filterstr = ''
  if (filter) {
    if (isOneObject<FilterPhrase>(filter)) {
      filter = [filter]
    }
    filterstr = filter
      .map((v, i, a) => {
        return `filter[${v.fname}]=${v.value}`
      })
      .join('&')
  }

  return filterstr
}

function getSortParams(sort: SortPhrase[] | SortPhrase): string {
  let sortstr = ''
  if (sort) {
    if (isOneObject(sort)) {
      sort = [sort]
    }
    sortstr = sort
      .map((v, i, a) => {
        switch (v.direction) {
          case 'asc':
            return v.fname
          case 'desc':
            return '-' + v.fname
          default:
            return null
        }
      })
      .filter(itm => itm != null)
      .join(',')
  }

  return sortstr
}

export class DatastoreUtil {
  constructor() {}

  static getListUrl<E extends AttributesBase, T extends JsonapiObject<E>>(
    jsonapiObjectTypeOrString: JsonapiObjectType<E, T> | string,
    baseUrl = '/',
    page?: PageNumberSize | PageCursor | PageOffsetLimit,
    sort?: SortPhrase[] | SortPhrase,
    filter?: FilterPhrase[] | FilterPhrase
  ): string {
    let nameInUrl: string
    if (typeof jsonapiObjectTypeOrString === 'string') {
      nameInUrl = jsonapiObjectTypeOrString
    } else {
      nameInUrl = Reflect.getMetadata(DtoDescriptionKey, jsonapiObjectTypeOrString).nameInUrl
    }
    if (!baseUrl.endsWith('/')) {
      baseUrl = baseUrl + '/'
    }
    let result = baseUrl + nameInUrl

    let tobeappend = ''
    if (page) {
      tobeappend = getPagerParams(page)
    }

    if (sort) {
      let sortstr = getSortParams(sort)
      sortstr = 'sort=' + sortstr
      tobeappend = tobeappend ? tobeappend + '&' + sortstr : sortstr
    }
    if (filter) {
      const filterstr = getFilterParams(filter)
      tobeappend = tobeappend ? tobeappend + '&' + filterstr : filterstr
    }
    result = tobeappend ? result + '?' + tobeappend : result

    return result
  }

  static getSingleUrl<E extends AttributesBase, T extends JsonapiObject<E>>(
    jsonapiObjectType: JsonapiObjectType<E, T>,
    id: number | string,
    baseUrl: string
  ): string
  static getSingleUrl<E extends AttributesBase, T extends JsonapiObject<E>>(model: T, baseUrl: string): string
  static getSingleUrl<E extends AttributesBase, T extends JsonapiObject<E>>(
    jsonapiObjectType: JsonapiObjectType<E, T> | T,
    id: number | string,
    baseUrl = '/'
  ): string {
    if (isModelInstance(jsonapiObjectType)) {
      return this.getListUrl(jsonapiObjectType.type, id as string) + '/' + jsonapiObjectType.id
    } else {
      return this.getListUrl(jsonapiObjectType, baseUrl) + '/' + id
    }
  }
}

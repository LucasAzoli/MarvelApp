export class LoginUser {
    email!: string;
    password!: string;

    constructor(){}
}

export type Characters = {
    code: string
    status: string
    copyright: string
    attributionText: string
    attributionHTML: string
    data: {
      offset: string
      limit: string
      total: number
      count: string
      results: Character[]
    }
    etag: string
}

export type Character = {
    id: string
    name: string
    description: string
    modified: string
    resourceURI: string
    urls: Array<{
        type: string
        url: string
    }>
    thumbnail: {
        path: string
        extension: string
    }
    comics: {
        available: string
        returned: string
        collectionURI: string
        items: Array<{
          resourceURI: string
          name: string
        }>
    }
    stories: {
        available: string
        returned: string
        collectionURI: string
        items: Array<{
          resourceURI: string
          name: string
          type: string
        }>
    }
    events: {
        available: string
        returned: string
        collectionURI: string
        items: Array<{
          resourceURI: string
          name: string
        }>
    }
    series: {
        available: string
        returned: string
        collectionURI: string
        items: Array<{
          resourceURI: string
          name: string
    }>
    }
}

export type User = {
    id: string
    email: string
    password: string
    name: string
    key: string
}
import { QueryDataType } from "../../../../services/api"
import { LoadingStatus } from "./../../../types"



const objExample = {
    "kind": "books#volume",
    "id": "8Pr_kLFxciYC",
    "etag": "3nMRZlKumpA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC",
    "volumeInfo": {
        "title": "Flowers For Algernon",
        "subtitle": "A Modern Literary Classic",
        "authors": [
            "Daniel Keyes"
        ],
        "publisher": "Hachette UK",
        "publishedDate": "2012-11-15",
        "description": "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9780575088498"
            },
            {
                "type": "ISBN_10",
                "identifier": "0575088494"
            }
        ],
        "readingModes": {
            "text": true,
            "image": false
        },
        "pageCount": 224,
        "printType": "BOOK",
        "categories": [
            "Fiction"
        ],
        "averageRating": 5,
        "ratingsCount": 4,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.14.17.0.preview.2",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ru/books?id=8Pr_kLFxciYC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=8Pr_kLFxciYC"
    },
    "saleInfo": {
        "country": "RU",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
            "amount": 1021.33,
            "currencyCode": "RUB"
        },
        "retailPrice": {
            "amount": 1021.33,
            "currencyCode": "RUB"
        },
        "buyLink": "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&rdid=book-8Pr_kLFxciYC&rdot=1&source=gbs_api",
        "offers": [
            {
                "finskyOfferType": 1,
                "listPrice": {
                    "amountInMicros": 1021330000,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amountInMicros": 1021330000,
                    "currencyCode": "RUB"
                }
            }
        ]
    },
    "accessInfo": {
        "country": "RU",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Flowers_For_Algernon-sample-epub.acsm?id=8Pr_kLFxciYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
            "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8Pr_kLFxciYC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    },
    "searchInfo": {
        "textSnippet": "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone&#39;s jokes - until an experiment in the enhancement of human intelligence turns him into a genius."
    }
}

export type BookType = typeof objExample

export interface BooksStateType {
    books: {
        totalItems: number,
        items: BookType[]
    },
    loadingStatus: LoadingStatus,
    loadMoreBooksStatus: LoadingStatus,
    queryParams: QueryDataType | null
}


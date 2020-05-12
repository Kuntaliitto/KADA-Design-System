export default interface NewsArticle {
    id: string,
    title: string,
    created: Date,
    changed: Date,
    ingress: string,
    size: number,
    theme: string,
    imageUrl: string,
    imageTitle: string
}

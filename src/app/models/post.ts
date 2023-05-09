import { Author } from "./author";

export interface Post {
    _id: String,
    title: String,
    slug: String,
    publishedAt: Date,
    author: Author
};
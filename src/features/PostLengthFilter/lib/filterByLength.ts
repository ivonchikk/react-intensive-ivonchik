import type { Post } from "../../../entities/post/ui/interface";

export const filterByLength = (posts: Post[], minLength: number) => {
    return posts.filter(post => post.title.length <= minLength)
}
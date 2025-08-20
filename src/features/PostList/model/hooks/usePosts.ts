import { useCallback, useState } from "react"
import type { Post } from "../../../../entities/post/model/interface";

export const usePosts = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState()

    const fetchPosts = useCallback(async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"

        setLoading(true);

        try {
            const response = await fetch(url);
            const posts = await response.json();
            setPosts(posts);
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [])

    return { posts, loading, error, fetchPosts }
}
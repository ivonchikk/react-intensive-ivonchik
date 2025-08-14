import { useEffect, useState } from "react"
import type { Post } from "../ui/interface";

export const usePosts = (mockPosts: Post[]) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPosts(mockPosts)
            setLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    return { posts, loading }

}
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const getUserRating = async (readable: ReadableWithReader): Promise<number | undefined> => {
    const supabase = createClientComponentClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return undefined
    }

    const userRating = readable.ratings.find(rating => user.id === rating.reader_id && readable.id === rating.readable_id)

    return userRating?.stars
}
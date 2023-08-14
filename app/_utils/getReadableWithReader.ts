import { type Session } from "@supabase/auth-helpers-nextjs"

interface Readable {
    id: string;
    profiles: Database["public"]["Tables"]["profiles"]["Row"];
    ratings: Rating[]
}

interface Rating {
    reader_id: string;
    readable_id: string;
    stars: number;
}

export interface ReadableWithReader extends Readable {
    reader_has_rated_readable: boolean;
}

export function getReadableWithReader(data: ReadableWithReader[], session: Session) {
    return (data?.map((readable) => ({
        ...readable,
        reader: Array.isArray(readable.profiles)
            ? readable.profiles[0]
            : readable.profiles,
        reader_has_rated_readable: !!readable.ratings.find(
            (rating) =>
                rating.reader_id === session?.user.id &&
                rating.readable_id === readable.id
        )?.stars,
    })) as ReadableWithReader[]) ?? [];
}
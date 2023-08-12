import { Database as DB } from "@/lib/database.types"
import { Readable, Note } from '@/lib/database.types';
import { type } from "os";


declare global {
    type Database = DB
    type Readable = DB["public"]["Tables"]["readables"]["Row"]
    type Note = DB["public"]["Tables"]["notes"]["Row"]

    type ReadableWithNotes = Readable & {
        notes: Note[];
    }

    type ReadableWithReader = Readable & {
        reader_has_rated_readable: boolean;
    }
}
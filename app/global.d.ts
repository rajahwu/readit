import { Database as DB } from "@/lib/database.types"
import { Readable, Note } from '@/lib/database.types';


declare global {
    type Database = DB
    type ReadableWithNotes = Readable & {
        notes: Note[];
    }
}
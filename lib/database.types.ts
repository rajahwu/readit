export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          content: string
          created_at: string
          id: string
          readable_id: string | null
          "reference ": string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          readable_id?: string | null
          "reference "?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          readable_id?: string | null
          "reference "?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notes_readable_id_fkey"
            columns: ["readable_id"]
            referencedRelation: "readables"
            referencedColumns: ["id"]
          }
        ]
      }
      readables: {
        Row: {
          author: string | null
          created_at: string
          end_date: string | null
          id: string
          note_id: string | null
          progress: string | null
          reader_id: string
          start_date: string | null
          status: string | null
          title: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          note_id?: string | null
          progress?: string | null
          reader_id: string
          start_date?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          note_id?: string | null
          progress?: string | null
          reader_id?: string
          start_date?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "readables_note_id_fkey"
            columns: ["note_id"]
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "readables_reader_id_fkey"
            columns: ["reader_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

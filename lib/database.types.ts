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
      profiles: {
        Row: {
          avatar_url: string
          id: string
          name: string
          username: string
        }
        Insert: {
          avatar_url?: string
          id: string
          name: string
          username: string
        }
        Update: {
          avatar_url?: string
          id?: string
          name?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ratings: {
        Row: {
          created_at: string
          id: string
          readable_id: string
          reader_id: string
          stars: number
        }
        Insert: {
          created_at?: string
          id?: string
          readable_id: string
          reader_id: string
          stars?: number
        }
        Update: {
          created_at?: string
          id?: string
          readable_id?: string
          reader_id?: string
          stars?: number
        }
        Relationships: [
          {
            foreignKeyName: "ratings_readable_id_fkey"
            columns: ["readable_id"]
            referencedRelation: "readables"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_reader_id_fkey"
            columns: ["reader_id"]
            referencedRelation: "profiles"
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
            foreignKeyName: "readables_reader_id_fkey"
            columns: ["reader_id"]
            referencedRelation: "profiles"
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

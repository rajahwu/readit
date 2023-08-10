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
      readables: {
        Row: {
          author: string | null
          created_at: string
          end_date: string | null
          id: string
          note: string | null
          progress: string | null
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
          note?: string | null
          progress?: string | null
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
          note?: string | null
          progress?: string | null
          start_date?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
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

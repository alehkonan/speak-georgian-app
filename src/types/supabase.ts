export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      test: {
        Row: {
          id: number
          created_at: string | null
          name: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string | null
        }
      }
      word_categories: {
        Row: {
          id: number
          created_at: string | null
          name: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string | null
        }
      }
      words: {
        Row: {
          id: number
          name_en: string | null
          name_ka: string | null
          category_id: number | null
          picture_url: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          name_en?: string | null
          name_ka?: string | null
          category_id?: number | null
          picture_url?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          name_en?: string | null
          name_ka?: string | null
          category_id?: number | null
          picture_url?: string | null
          created_at?: string | null
        }
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
  }
}

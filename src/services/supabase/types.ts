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
      categories: {
        Row: {
          created_at: string
          id: number
          name: string
          picture_url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          picture_url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          picture_url?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string
          id: number
          is_favorite: boolean
          user_id: string
          word_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          is_favorite?: boolean
          user_id: string
          word_id: number
        }
        Update: {
          created_at?: string
          id?: number
          is_favorite?: boolean
          user_id?: string
          word_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_word_id_fkey"
            columns: ["word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          }
        ]
      }
      phrases: {
        Row: {
          category_id: number | null
          created_at: string
          en: string
          id: number
          ka: string
          transcription: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          en?: string
          id?: number
          ka?: string
          transcription?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string
          en?: string
          id?: number
          ka?: string
          transcription?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phrases_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      statistics: {
        Row: {
          created_at: string
          id: number
          is_learned: boolean
          listened: number
          right_answers: number
          total_answers: number
          translation_shown: number
          user_id: string
          word_id: number
          wrong_answers: number
        }
        Insert: {
          created_at?: string
          id?: number
          is_learned?: boolean
          listened?: number
          right_answers?: number
          total_answers?: number
          translation_shown?: number
          user_id: string
          word_id: number
          wrong_answers?: number
        }
        Update: {
          created_at?: string
          id?: number
          is_learned?: boolean
          listened?: number
          right_answers?: number
          total_answers?: number
          translation_shown?: number
          user_id?: string
          word_id?: number
          wrong_answers?: number
        }
        Relationships: [
          {
            foreignKeyName: "statistics_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "statistics_word_id_fkey"
            columns: ["word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          }
        ]
      }
      "user-settings": {
        Row: {
          created_at: string | null
          id: number
          show_daily_word: boolean
          show_pictures_in_game: boolean
          show_transcription: boolean
          show_translation: boolean
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          show_daily_word?: boolean
          show_pictures_in_game?: boolean
          show_transcription?: boolean
          show_translation?: boolean
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          show_daily_word?: boolean
          show_pictures_in_game?: boolean
          show_transcription?: boolean
          show_translation?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user-settings_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      verbs: {
        Row: {
          created_at: string
          first_person_in_future_word_id: number | null
          first_person_in_past_word_id: number | null
          first_person_in_present_word_id: number | null
          id: number
          original: string
          second_person_in_future_word_id: number | null
          second_person_in_past_word_id: number | null
          second_person_in_present_word_id: number | null
          third_person_in_future_word_id: number | null
          third_person_in_past_word_id: number | null
          third_person_in_present_word_id: number | null
        }
        Insert: {
          created_at?: string
          first_person_in_future_word_id?: number | null
          first_person_in_past_word_id?: number | null
          first_person_in_present_word_id?: number | null
          id?: number
          original?: string
          second_person_in_future_word_id?: number | null
          second_person_in_past_word_id?: number | null
          second_person_in_present_word_id?: number | null
          third_person_in_future_word_id?: number | null
          third_person_in_past_word_id?: number | null
          third_person_in_present_word_id?: number | null
        }
        Update: {
          created_at?: string
          first_person_in_future_word_id?: number | null
          first_person_in_past_word_id?: number | null
          first_person_in_present_word_id?: number | null
          id?: number
          original?: string
          second_person_in_future_word_id?: number | null
          second_person_in_past_word_id?: number | null
          second_person_in_present_word_id?: number | null
          third_person_in_future_word_id?: number | null
          third_person_in_past_word_id?: number | null
          third_person_in_present_word_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "verbs_first_person_in_future_word_id_fkey"
            columns: ["first_person_in_future_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_first_person_in_past_word_id_fkey"
            columns: ["first_person_in_past_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_first_person_in_present_word_id_fkey"
            columns: ["first_person_in_present_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_second_person_in_future_word_id_fkey"
            columns: ["second_person_in_future_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_second_person_in_past_word_id_fkey"
            columns: ["second_person_in_past_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_second_person_in_present_word_id_fkey"
            columns: ["second_person_in_present_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_third_person_in_future_word_id_fkey"
            columns: ["third_person_in_future_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_third_person_in_past_word_id_fkey"
            columns: ["third_person_in_past_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verbs_third_person_in_present_word_id_fkey"
            columns: ["third_person_in_present_word_id"]
            referencedRelation: "words"
            referencedColumns: ["id"]
          }
        ]
      }
      words: {
        Row: {
          category_id: number | null
          created_at: string
          id: number
          name_en: string
          name_ka: string
          picture_url: string | null
          sound_url: string | null
          transcription: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          id?: number
          name_en?: string
          name_ka?: string
          picture_url?: string | null
          sound_url?: string | null
          transcription?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string
          id?: number
          name_en?: string
          name_ka?: string
          picture_url?: string | null
          sound_url?: string | null
          transcription?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "words_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
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

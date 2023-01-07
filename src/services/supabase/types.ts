export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          picture_url: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string;
          name: string;
          picture_url?: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          name: string;
          picture_url?: string;
        };
      };
      words: {
        Row: {
          id: number;
          name_en: string;
          name_ka: string;
          transcription: string | null;
          category_id: number | null;
          picture_url: string | null;
          sound_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name_en?: string | null;
          name_ka?: string | null;
          category_id?: number | null;
          picture_url?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          name_en?: string | null;
          name_ka?: string | null;
          category_id?: number | null;
          picture_url?: string | null;
          created_at?: string | null;
        };
      };
      statistics: {
        Row: {
          id: number;
          user_id?: string;
          word_id: number;
          listened: number;
          translation_shown: number;
          right_answers: number;
          wrong_answers: number;
          total_answers: number;
          is_learned: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id?: string;
          word_id: number;
          listened?: number;
          translation_shown?: number;
          right_answers?: number;
          wrong_answers?: number;
          total_answers?: number;
          is_learned?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          word_id?: number;
          listened?: number;
          translation_shown?: number;
          right_answers?: number;
          wrong_answers?: number;
          total_answers?: number;
          is_learned?: boolean;
          created_at?: string;
        };
      };
      favorites: {
        Row: {
          id: number;
          word_id: number;
          user_id: string;
          is_favorite: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          word_id: number;
          user_id: string;
          is_favorite: boolean;
          created_at?: string;
        };
        Update: {
          id: number;
          word_id?: number;
          user_id?: string;
          is_favorite?: boolean;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

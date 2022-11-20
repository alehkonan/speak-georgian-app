/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

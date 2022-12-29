import { useEffect, useRef } from 'react';
import { supabaseClient } from 'src/services/supabase';

export const GoogleSignIn = () => {
  const googleButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(window.google);
    if (window.google && googleButtonRef.current) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      });
      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        {
          type: 'standard',
          local: 'en-US',
          shape: 'pill',
          size: 'large',
          text: 'signin_with',
          theme: 'outline',
        },
        () => supabaseClient.auth.signInWithOAuth({ provider: 'google' })
      );
    }
  }, []);

  return <div ref={googleButtonRef} />;
};

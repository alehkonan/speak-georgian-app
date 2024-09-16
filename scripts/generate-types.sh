#!/usr/bin/env bash

export $(cat .env.local | xargs)

if expect -c "spawn npx supabase login; expect \"*\" { exit 1 }"; then
  echo Logging to the supabase with token...
  yes $SUPABASE_ACCESS_TOKEN | npx supabase login
else
  echo Logging to the supabase...
  npx supabase login
fi

echo Generating types...
npx supabase gen types typescript --project-id $PROJECT_ID > src/api/types.ts

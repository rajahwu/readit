"use client";

import {
  createClientComponentClient,
  type Session,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthButtonClient<Database>({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}:3000/auth/callback`,
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    <button className="btn" onClick={handleSignOut}>
      Logout
    </button>
  ) : (
    <button className="btn" onClick={handleSignIn}>
      Login
    </button>
  );
}

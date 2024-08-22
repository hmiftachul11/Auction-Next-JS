'use client';

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignOut() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button onClick={handleSignOut}>
      Sign out
    </Button>
  );
}

'use client';

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignIn() {
  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn();
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
}

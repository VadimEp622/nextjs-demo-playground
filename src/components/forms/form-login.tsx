"use client";

import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions/auth";

export default function FormLogin() {
  return (
    <div>
      <h2>Please sign in</h2>
      <Button onClick={() => login()}>Sign in</Button>
    </div>
  );
}

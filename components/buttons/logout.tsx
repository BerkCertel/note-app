"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Logout <LogOut className="size-4" />
    </Button>
  );
}

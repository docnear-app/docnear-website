"use client";

import { useEffect, useState } from "react";
import DocNearLoader from "@/components/ui/DocNearLoader";

interface HomeShellProps {
  children: React.ReactNode;
}

export default function HomeShell({ children }: HomeShellProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Minimum loader time for a smooth feel; tweak as needed
    const timer = setTimeout(() => setReady(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return <DocNearLoader />;
  }

  return <>{children}</>;
}

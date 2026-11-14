// Sign-in screen (Gate 1: identity). Google works as soon as the Google provider
// is enabled in Firebase Auth. GitHub works once a GitHub OAuth app is configured
// and the GitHub provider is enabled in the Firebase console.
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";

export default function Login() {
  const { user, signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();
  const [busy, setBusy] = useState<"google" | "github" | null>(null);

  useEffect(() => {
    if (user) navigate("/app", { replace: true });
  }, [user, navigate]);

  const run = async (which: "google" | "github", fn: () => Promise<void>) => {
    try {
      setBusy(which);
      await fn();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Sign-in failed";
      toast.error(message);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Sign in to RedForge</CardTitle>
          <CardDescription>
            You can only test applications you prove you own. Sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            className="w-full"
            variant="outline"
            disabled={busy !== null}
            onClick={() => run("google", signInWithGoogle)}
          >
            {busy === "google" ? "Opening…" : "Continue with Google"}
          </Button>
          <Button
            className="w-full"
            disabled={busy !== null}
            onClick={() => run("github", signInWithGithub)}
          >
            {busy === "github" ? "Opening…" : "Continue with GitHub"}
          </Button>
          <p className="pt-2 text-center text-xs text-muted-foreground">
            By continuing you agree that you will only scan assets you are authorized to test.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

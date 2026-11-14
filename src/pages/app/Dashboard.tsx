// The authenticated product shell. For this first slice it shows the signed-in
// user and an empty "targets" state. The next slice wires "Add target" to the
// ownership-verification flow (Gate 2) and writes to the `targets` Firestore
// collection — nothing becomes testable until ownership is proven + RoE signed.
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Plus, Target } from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="font-semibold">RedForge</span>
            <Badge variant="secondary" className="ml-1">Beta</Badge>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={() => logout()}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Targets</h1>
            <p className="text-sm text-muted-foreground">
              Applications you have verified you own and may test.
            </p>
          </div>
          <Button disabled title="Ownership verification flow — next build step">
            <Plus className="mr-1 h-4 w-4" /> Add target
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">No targets yet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <Target className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                To add a target you&apos;ll prove you control it (a DNS TXT record or a
                file at <code>/.well-known/</code>) and sign a short Rules of Engagement.
                Only then can RedForge test it. That verification flow is the next step.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

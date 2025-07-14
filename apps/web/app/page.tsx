import { Button } from "@repo/ui";

export default function Home() {
  return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
          <Button>Get Started</Button>
        </div>
      </div>
  );
}

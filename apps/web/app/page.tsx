import { Button } from "@repo/ui";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Turborepo</h1>
        <p className="text-gray-600 mb-8">Build system that makes your team faster</p>
        <Button>Get Started</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Documentation</h3>
          <p className="text-gray-600 mb-4">Learn about Turborepo features and API</p>
          <Button variant="outline" size="sm" asChild>
            <a href="https://turborepo.com/docs" target="_blank" rel="noopener noreferrer">
              Read Docs
            </a>
          </Button>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Examples</h3>
          <p className="text-gray-600 mb-4">Choose from multiple examples to get started</p>
          <Button variant="outline" size="sm" asChild>
            <a href="https://turborepo.com/docs/getting-started/from-example" target="_blank" rel="noopener noreferrer">
              Browse Examples
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

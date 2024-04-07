import { ModeToggle } from "@/components/ui/mode-toggle";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <h1 className="text-2xl font-bold">Homepage</h1>
      <ModeToggle />
    </main>
  );
}

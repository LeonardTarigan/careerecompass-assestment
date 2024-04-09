import Logo from "@/components/ui/logo";

function MainLoading() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <Logo className="h-20 w-20 fill-yellow-400 dark:fill-yellow-500" />
      <h2 className="text-3xl font-bold">
        Dia<span className="text-yellow-400 dark:text-yellow-500">Link.</span>
      </h2>
    </main>
  );
}

export default MainLoading;

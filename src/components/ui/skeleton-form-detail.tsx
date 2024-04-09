import { Skeleton } from "./skeleton";

function SkeletonFormDetail() {
  return (
    <div className="mb-2 flex w-full flex-col items-center space-y-4 rounded-lg bg-slate-900 p-5">
      <Skeleton className="h-10 w-1/3 rounded-lg" />
      <hr />

      <div className="grid w-full gap-2 space-y-1 md:grid-cols-2">
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      <div className="flex w-full gap-2 pt-5">
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
}

export default SkeletonFormDetail;

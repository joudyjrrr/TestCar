// components/Skeleton.tsx
export default function Skeleton() {
  return (
    <div className="animate-pulse border rounded shadow-sm bg-white overflow-hidden">
      <div className="w-full h-52 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}

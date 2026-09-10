export default function Loading() {
  return (
    <div
      className="relative min-h-[70vh] pt-32"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] overflow-hidden bg-white/10">
        <div className="route-loading-bar h-full w-1/3 bg-copper" />
      </div>
    </div>
  );
}

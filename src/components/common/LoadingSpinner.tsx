export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center" style={{ marginTop: '-80px' }}>
        <p className="text-white ">Loading ...</p>
        <div className="w-24 h-24 border-6 border-emerald-500 border-t-transparent rounded-full animate-spin mt-2">
          
        </div>
      </div>
    </div>
  );
}

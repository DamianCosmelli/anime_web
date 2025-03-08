export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center" style={{ marginTop: '-80px' }}>
        <p>Loading...</p>
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mt-2"></div>
      </div>
    </div>
  );
}

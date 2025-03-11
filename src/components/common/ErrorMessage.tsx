interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-500 text-white p-4 rounded-lg shadow-md max-w-sm mx-auto mt-20">
      <p className="font-bold">Error:</p>
      <p>{message}</p>
    </div>
  );
}
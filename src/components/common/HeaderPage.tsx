interface HeaderPageProps {
  title: string; 
}

export function HeaderPage({ title }: HeaderPageProps) {
  return (
    <header className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10">
      <h1 className="font-semibol">{title}</h1>
    </header>
  );
}
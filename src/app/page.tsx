import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="p-24">
        <h1 className="text-4xl font-bold">Welcome to the FedReconcile Prototype</h1>
      </div>
    </main>
  );
}
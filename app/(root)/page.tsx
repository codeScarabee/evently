import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Evently</h1>
      <Button variant={'destructive'} className="px-8">
        Delete
      </Button>
    </section>
  );
}

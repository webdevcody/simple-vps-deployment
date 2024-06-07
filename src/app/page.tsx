import { Footer } from "./(landing)/_sections/footer";
import Hero from "./(landing)/_sections/hero";
import Newsletter from "./(landing)/_sections/newsletter";

export default function Home({
  searchParams,
}: {
  searchParams: { subscribed?: string };
}) {
  return (
    <>
      <Hero />
      <Newsletter showSubscribeSuccess={!!searchParams.subscribed} />
      <Footer />
    </>
  );
}

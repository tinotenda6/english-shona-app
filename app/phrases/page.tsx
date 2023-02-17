// Import your Client Component
import Cards from '../wordcard/Cards';

async function getPhrases() {
    const res = await fetch(`https://eng-sho-ui-backend.vercel.app/api/phrases`,  { next: { revalidate: 86400 } });
    //  Recommendation: handle errors
     if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
export default async function Page() {
  // Fetch data directly in a Server Component
  const words = await getPhrases();
  // Forward fetched data to your Client Component
  return <Cards words={words}/>;
}
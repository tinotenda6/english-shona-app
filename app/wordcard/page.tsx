// Import your Client Component
import Cards from './Cards';

async function getDataWords() {
    const res = await fetch(`https://eng-sho-ui-backend.vercel.app/api/hello`,  { next: { revalidate: 86400 } });
    //  Recommendation: handle errors
     if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
export default async function Page() {
  // Fetch data directly in a Server Component
  const words = await getDataWords();
  // Forward fetched data to your Client Component
  return <Cards words={words}/>;
}
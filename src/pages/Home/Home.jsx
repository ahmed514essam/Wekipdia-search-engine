import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from '../Home/components/SearchResults/SearchResults';
import ScrollTop from '../ScrollToTopButton/ScrollTop';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);

    const getResultsFromAPI = async () => {
const res = await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch="
+ searchQuery) 
       const data = await res.json()

        setResults(data?.query?.search || []);
    };

  useEffect(()=> {
getResultsFromAPI()
  },[searchQuery])

    return (
        <main className='container'>
            <h1 className="fw-bold text-center fs-2">Weki Search</h1>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <SearchResults results={results}/>
            <ScrollTop/>
        </main>
    )
}

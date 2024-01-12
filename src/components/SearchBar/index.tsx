import React, {useState} from "react";
import { Input } from '../../components';
// import axios from "axios";
// import baseApi from "../../api/baseApi";

interface SearchBar {
    title: string;
    value: string
}


const SearchBar = () => {

    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=0bc00825346244b3a4b28c881462f279').then((response) =>response.json())
        .then((json) => {
            console.log(json);
            const results = json.filter((title: string) => {
                return (
                    value &&
                    title &&
                    title.toLowerCase().includes(value)
                );
            });
            console.log(results);
        });
        
    };

    const handleChange = (value: React.SetStateAction<string>) => {
        setInput (value);
        fetchData (value);
    }

    // const [results, setResults] = useState ([]);

    // const SearchResult = ({ result}) => {
    //     return (
    //         <div
    //         onClick={(e) => alert('You selected ${result}!')} >
    //             {result}
    //             </div>
    //     )
    // }


    // const SearchResultsList = ({ results}) => {
    //     {results.map((result, title) => {
    //         return <SearchResult result={result.name} key={title} ;
    //     })}
    // }



    return (

        <div className='flex flex-row  gap-10'>

            <div className='flex flex-row gap-0'>
                <Input className='bg-slate-100 text-white rounded-bl-xl rounded-tl-xl '
                placeholder='Search news ... '
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
                <button className='p-1 bg-slate-100 text-black rounded-br-xl rounded-tr-xl'>Search </button>
            </div>
        </ div>

    )
}

export default SearchBar
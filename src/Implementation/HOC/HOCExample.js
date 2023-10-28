import React from 'react';
import { useState } from 'react/';
import { useEffect } from 'react/';
import List from './list';
import WrappedHOC from './HOC';

const WrappedList = WrappedHOC(List);

function HOCExample() {

    const [loading,setLoading] = useState(true);
    const [repos,setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/hacktivist123/repos`)
        .then((json) => json.json())
        .then((repos) => {
          setLoading(false);
          setRepos(repos)
        });
      }, []);

    return (
        <div>
           <WrappedList isLoading = {loading} repos={repos}/> 
        </div>
    );
}

export default HOCExample;
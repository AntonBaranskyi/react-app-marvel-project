import {useState, useCallback} from 'react';

const useHttp = ()=>{
    const [loading, setLoading] = useState(false);
    const [error, setEror] = useState(null);
}
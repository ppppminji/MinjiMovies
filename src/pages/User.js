import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const {a} = useParams();
    const [user, setUser]=useState(null);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users' + a).then(res =>{
            console.log(res)
            setUser(res.data);
        })
    })

    return (
        <div>
            
        </div>
    );
};

export default User;
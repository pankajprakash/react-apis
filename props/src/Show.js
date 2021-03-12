import React, {useState, useEffect} from 'react';

// <button onclick={()=>{
// let arr={
//     firstname=`${name1}`
// }


// }}></button>

const Show = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPost(json))
    },[])
    return (
        <div>
            <ul>
                {
                    post.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Show;

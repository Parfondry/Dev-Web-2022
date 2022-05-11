import React, {useState, useEffect} from "react";

function Comments(){
    const [Comments, setComments] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/Comment").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes.data));
     })
    let x=0;
    return (<div>{Comments.length !=0 && Comments.map(comment => <li id={comment.id} key={comment.id}>{comment.Comment}</li>)}</div>)
}

export default Comments;
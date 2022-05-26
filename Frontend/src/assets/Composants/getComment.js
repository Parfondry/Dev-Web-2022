import React, {useState, useEffect} from "react";
import axios from "axios";

function Comments(prop){
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Comment/"+prop.data)
            .then(res => setComments(res.data.data));
     }, []);
    return (<div>{comments.length !==0 && comments.map(comment => <li id={comment.id} key={comment.id}><b>{comment.Nickname}</b>: {comment.Comment}</li>)}</div>);
}


export default Comments;
import React, {useState, useEffect} from "react";
import axios from "axios";

function Comments(){
    const [Comments, setComments] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Comment")
            .then(res => setComments(res.data.data));
     }, []);

    return (<div>{Comments.length !=0 && Comments.map(comment => <li id={comment.id} key={comment.id}>{comment.Comment}</li>)}</div>);
}


export default Comments;
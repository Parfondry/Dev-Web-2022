import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";

function Comments(){
    const [Comments, setComments] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Comment/Image")
            .then(res => setComments(res.data.data));
     }, []);

    return (<div>{Comments.length !=0 && Comments.map(comment => <li id={comment.id} key={comment.id}><b>{comment.Nickname}</b>: {comment.Comment}</li>)}</div>);
}

export default Comments;
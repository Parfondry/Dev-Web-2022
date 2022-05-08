import React, {useState, useEffect} from "react";

function Comments(){
    //const [comments, setComments] = useState();
    let comments;
   // useEffect(() => {
        fetch("http://localhost:8080/Comment").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => comments = "jsonRes");
    console.log(comments);
    // })
   // console.log(comments);
   // return (<div>{comments}</div>)
}

export default Comments;
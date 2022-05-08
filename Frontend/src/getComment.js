import React, {useState, useEffect} from "react";

function Comments(){
    //const [comments, setComments] = useState();

   // useEffect(() => {
        fetch("http://localhost:3000/Comment").then(res => {
            if(res.ok) {
                console.log(res.json())
                return res.json()
            }
        })//.then(jsonRes => setComments(jsonRes.data))
  //  })
    //console.log(comments);
   // return (<div>{comments}</div>)
}

export default Comments;
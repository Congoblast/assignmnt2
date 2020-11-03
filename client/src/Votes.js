import React from "react";
import { render } from "react-dom";
import { updateQuestion } from "../../server/src/dataDB";

//This does not work. It can be implemented, but i have wasted way too much time trying, so this 
//section is a mess. If ever worked on, nearly everything in line
//8 should be changed as it makes no sense. The same with 10. Left it by pressing ctrl z
const LikeButton =({question,upvotes, setArticleInfo})=>{
    const upvoteComment = async() =>{
        const result = await fetch(`/api/questions/${this.props.id}/upvote`,{
            method: "post", 
        });
        const body = await result.json();
        setArticleInfo(body);
    }
return (
<div id="upvote-section">
<button onClick={() => upvoteComment}>add Upvote</button>
<p> upvotes {upvotes} </p>
</div>
);
}

//and by the way the structure of db should be changed as well, again, this is close to
//pure nonsense as it is now. 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThreadModal from "../../../models/Thread";
import { getThreadById } from "../../../services/DataServices";
import Nav from "../../areas/Nav";
import ThreadHeader from "./ThreadHeader";

const Thread= () => {
    const [thread,setThread] = useState<ThreadModal | undefined>();
    const{id} = useParams();

    useEffect(() =>{
        console.log("Thread id", id);
      
        if(id){
            const idNum:number = +id;
            if( idNum >0){
                getThreadById(id).then((th)=>{
                    setThread(th);
                });
            }
        }
    },[id]);

    return (
        <div className="screen-root-container">
            <div className="thread-nav-container">
                <Nav />
            </div>
            <div className="thread-content-container">
                <div className="thread-content-post-container">
                    <ThreadHeader
                        userName={thread?.userName}
                        lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
                        title={thread?.title}
                    />
                </div>
            </div>
        </div>
      );
};
    
export default Thread;



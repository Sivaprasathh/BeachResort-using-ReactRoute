import React from 'react';
import Title from "./Title";
import {FaCocktail,FaHiking ,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends React.Component{
    state={
        services:[
            {
            icon :<FaCocktail/>,
            title:"free cocktail",
            info:"Loren ipsum dolor sit"
            },
            {
                icon :<FaHiking/>,
                title:"endless Hiking",
                info:"Loren ipsum dolor sit"
           },
           {
            icon :<FaShuttleVan/>,
            title:"free Shuttle",
            info:"Loren ipsum dolor sit"
            },
            {
                icon :<FaBeer/>,
                title:"free Beer",
                info:"Loren ipsum dolor sit"
            }
        ]
    }
    render(){
        return(
            <section className = "services">
    <Title title = "services" />
 <div className = "services-center">
     {this.state.services.map((item,index)=>{
     return <article key ={index} className = "service">
         <span>{item.icon}</span>
         <h6>{item.title}</h6>
         <p>{item.info}</p>
     </article>
     })}
 </div>
    </section>
        );
    }
}
export default Services ;
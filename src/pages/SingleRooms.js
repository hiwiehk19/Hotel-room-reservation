import React,{ useContext } from "react";
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link, useParams} from 'react-router-dom'
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";


const SingleRooms = () =>  {

      let { slug } = useParams()
      //let defaultBcg = defaultBcg
  
  const roomContext= useContext(RoomContext);

          const { getRoom }= roomContext;
          const room= getRoom(slug);
          console.log(slug)
          if(!room){
            return (
             
                <div className="error">
                <h3>no such room could be found...</h3>
                <Link to ="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            )
          }

        const {
          name,
          description,
          capacity,
          size,
          price,
          extras,
          breakfast,
          pets,
          images
        } = room;
      
        return (
         < StyledHero img={images[0]}>
              <Banner title={`${name} room`}>
              <Link to ="/rooms" className="btn-primary">
                    back to rooms
                  </Link> 
              </Banner> 
              </StyledHero>
        )        
}

export default SingleRooms;
    
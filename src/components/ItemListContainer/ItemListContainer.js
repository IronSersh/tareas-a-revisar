import React from 'react';
import UserCard from './carWidget/CartWidget'
function Item (){ 
render() 
    return(
            <div>
            <UserCard 
                  name="sergio Castelli"
                  age="27"
                  img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
               />
               <UserCard 
                  name="Greta Palermo"
                  age="24"
                  img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
               />
            </div>
        )
    }


export default Item;
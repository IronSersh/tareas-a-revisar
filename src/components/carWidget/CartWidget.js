import React from 'react';
import {Imagen} from 'logo_coder.png'

const UserCard = ({img, name, age}) =>(
    <div className="card">
        <Card>
            <Imagen src={img}></Imagen>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.age>{age}</Card.age>
            </Card.Content>
        </Card>
    </div>
)

export default UserCard
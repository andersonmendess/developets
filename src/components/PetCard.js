import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import placeholder from '../assets/img/paw.png';

export const PetCard = (pet, index) => {
  const extra = (
    <Card.Content extra>
      <a href={`http://github.com/${pet.owner}`}>
        <Icon name='github' />
        {pet.owner}
      </a>
    </Card.Content>
  );

  return (
    <Card key={index}>
      <Image src={pet.img || placeholder} onError={(e) => e.target.src = placeholder} />
      <Card.Content>
        <Card.Header>{pet.name}</Card.Header>
        <Card.Meta>
          {`the ${pet.type}`}
        </Card.Meta>
        <Card.Description>
          {pet.description}
        </Card.Description>
      </Card.Content>
      {pet.owner ? extra : null}
    </Card>
  );
};
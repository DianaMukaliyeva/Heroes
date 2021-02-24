import * as React from 'react';
import styled from 'styled-components';

type TElement = 'Fire' | 'Earth' | 'Air' | 'Water' | 'Plasma' | 'Physical' | 'Psychic';

interface Attributes {
  agility: number;
  healthpoints: number;
  intelligence: number;
  mana: number;
  resistance: string;
  speed: number;
  stamina: number;
  strength: number;
  weakness: TElement;
}

interface Skill {
  damage: number;
  element: TElement;
  name: string;
}

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  attributes: Attributes;
  skills: [Skill];
}

const StyledCard = styled.div`
  border: 1px solid #3c1053;
  border-radius: 25px;
  padding: 25px 12px 18px;
  height: 500px;
  text-align: center;
  max-width: 300px;
  margin: 10px;
  background: linear-gradient(180deg, #3c1053, #ad5389);
  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease;
  }
`;

const StyledName = styled.h2`
  color: #fff;
`;

const StyledImage = styled.img`
  border-radius: 25px;
  width: 250px;
`;

interface Props {
  color: string;
}

const StyledAttribute = styled.div<Props>`
  color: ${(props) => `${props.color}`};
  font-weight: bold;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledText = styled.p`
  font-weight: bold;
  font-style: italic;
`;

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  backStory,
  attributes,
  skills,
}) => {
  return (
    <StyledCard>
      <StyledName>{name}</StyledName>
      <Box>
        <div>
          <StyledAttribute color="#f27927">Strength</StyledAttribute>
          <StyledAttribute color="#fff">{attributes.strength}</StyledAttribute>
        </div>
        <div>
          <StyledAttribute color="#f27927">Intelligence</StyledAttribute>
          <StyledAttribute color="#fff">{attributes.intelligence}</StyledAttribute>
        </div>
        <div>
          <StyledAttribute color="#f27927">Mana</StyledAttribute>
          <StyledAttribute color="#fff">{attributes.mana}</StyledAttribute>
        </div>
      </Box>
      <StyledImage src={imgUrl} />
      <Box>
        <div>
          <StyledAttribute color="#fff">{attributes.speed}</StyledAttribute>
          <StyledAttribute color="#031430">Speed</StyledAttribute>
        </div>
        <div>
          <StyledAttribute color="#fff">{attributes.resistance}</StyledAttribute>
          <StyledAttribute color="#031430">Resistance</StyledAttribute>
        </div>
        <div>
          <StyledAttribute color="#fff">{attributes.agility}</StyledAttribute>
          <StyledAttribute color="#031430">Agility</StyledAttribute>
        </div>
      </Box>
      <StyledText>{description}</StyledText>
    </StyledCard>
  );
};

import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => props.size || '1rem'};
  font-weight: ${props => props.weight || 500};
  color: ${props => props.color || '#a2a7ac'};
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  min-width: calc(100% / 3);
  background-color: #f3f6f9;
  border: 2px solid #ebeff4;
  padding: 15px 0;
  box-sizing: border-box;
`;

export const ProfileData = props => {
  return (
    <ListItem>
      <Text className="label" size="0.85rem">
        {
          (props.el[0] =
            props.el[0].slice(0, 1).toUpperCase() + props.el[0].slice(1))
        }
      </Text>
      <Text className="quantity" weight="bold" color="#1a293c" size="1.05rem">
        {props.el[1]}
      </Text>
    </ListItem>
  );
};

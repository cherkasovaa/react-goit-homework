import styled from 'styled-components';

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const WrapperStyled = styled(BoxStyled)`
  background: #ffffff;
  width: 270px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

export const AvatarStyled = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 30px 0 20px;
`;

export const TextStyled = styled.p`
  font-size: ${props => props.size || '1rem'};
  font-weight: ${props => props.weight || 500};
  color: ${props => props.color || '#a2a7ac'};
`;

export const ListStyled = styled.ul`
  display: flex;
  width: 100%;
`;

export const ListItemStyled = styled.li`
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
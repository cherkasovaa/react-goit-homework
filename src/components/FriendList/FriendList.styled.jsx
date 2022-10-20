import styled from 'styled-components';

export const BoxStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;
  margin-bottom: 10px;
  padding: 12px 15px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.17);
`;

export const StatusStyled = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const UserNameStyled = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const AvatarStyled = styled.img`
  width: 48px;
`;

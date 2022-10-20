const { default: styled } = require('styled-components');

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: calc(100% / 4);
  flex-grow: 1;
  padding: 10px;
  background: ${props => props.color || 'red'};
  box-sizing: border-box;
`;

const Text = styled.span`
  font-size: ${props => props.size || '0.8rem'};
  color: #fae1e4;
`;

export const ListItem = ({label, percentage}) => {
  const generateColor = () => {
    const regExp = /\w/;
    let code = ((Math.random() * 0xffffff) << 0).toString(16);
    const firstChar = code.slice(0, 1);

    code = regExp.test(firstChar) ? code.replace(firstChar, '3') : code;
    code = code.length > 5 ? code : '345c8f';

    return `#${code}`;
  };

  return (
    <Item className="item" color={generateColor()}>
      <Text className="label">{label}</Text>
      <Text className="percentage" size="1.2rem">
        {percentage}%
      </Text>
    </Item>
  );
};

import { ItemStyled, TextStyled } from './Statistic.styled';

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
    <ItemStyled className="item" color={generateColor()}>
      <TextStyled className="label">{label}</TextStyled>
      <TextStyled className="percentage" size="1.2rem">
        {percentage}%
      </TextStyled>
    </ItemStyled>
  );
};

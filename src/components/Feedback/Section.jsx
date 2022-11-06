import PropTypes from 'prop-types';
import { TitleStyled } from './Feedback.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </>
  );
};

Section.defaultProps = {
  title: 'Please leave feedback',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

import { FormStyled, InputSyled, Title } from './Phonebook.styled';
import { Formik } from 'formik';

const initialValues = {
  filter: '',
};

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Formik initialValues={initialValues}>
        <FormStyled>
          <InputSyled
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </FormStyled>
      </Formik>
    </>
  );
};

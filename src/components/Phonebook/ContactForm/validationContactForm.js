import * as Yup from 'yup';

const validationContactForm = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Name can only contain Latin letters')
    .test('is-full-name', 'Please enter both first and last name', value => {
      const nameArr = value?.split(' ');
      if (nameArr) {
        return nameArr.length === 2 && nameArr[1] !== '';
      }
    })
    .test(
      'first-capital-letter',
      'Name must start with capital letter',
      value => {
        const nameArr = value?.split(' ');
        if (nameArr?.length === 2 && nameArr[1] !== '') {
          return (
            nameArr[0][0] === nameArr[0][0].toUpperCase() &&
            nameArr[1][0] === nameArr[1][0].toUpperCase()
          );
        }
        return false;
      }
    )
    .required('Required field'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required field'),
});

export default validationContactForm;

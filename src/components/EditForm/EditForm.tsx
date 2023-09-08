import { Edit, SimpleForm, ReferenceInput, TextInput } from 'react-admin';

export const EditForm = () => (
  <Edit title={'Редактировать'}>
    <SimpleForm>
      <ReferenceInput source='userId' reference='users' />
      <TextInput source='id' disabled />
      <TextInput source='title' disabled />
      <TextInput source='body' multiline rows={7} />
    </SimpleForm>
  </Edit>
);

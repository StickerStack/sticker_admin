import { Card, CardContent, CardHeader } from '@mui/material';
import { SimpleForm, ReferenceInput, TextInput, Show, SelectInput } from 'react-admin';

export const ShowOrder = () => (
  <Show title={`Просмотр заказа`}>
    <Card>
      <CardHeader title='Заказ с номером...' />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
    <SimpleForm>
      <ReferenceInput source='userId' reference='users' />
      <TextInput source='id' disabled />
      <SelectInput
        source='geo'
        choices={[
          { lat: '-43.9509', name: 'Male' },
          { lng: '-34.4618', name: 'Female' },
        ]}
      />
    </SimpleForm>
  </Show>
);

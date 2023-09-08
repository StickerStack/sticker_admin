import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  SelectField,
  EmailField,
  ReferenceInput,
  TextInput,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const OrderList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const orderFilters = [
    // <TextInput source='q' label='Поиск' alwaysOn />,
    // <ReferenceInput source='userId' label='User' reference='users' />,
  ];
  return (
    <List title={'Заказы'} filter={orderFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick='show'>
          <TextField source='id' />
          <SelectField
            source='geo'
            choices={[
              { lat: '-43.9509', name: 'Male' },
              { lng: '-34.4618', name: 'Female' },
            ]}
          />
          <TextField source='name' />
          <TextField source='username' />
          <EmailField source='email' />
          <TextField source='phone' />
          <TextField source='company.name' />
        </Datagrid>
      )}
    </List>
  );
};

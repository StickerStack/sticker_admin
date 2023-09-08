import { List, SimpleList, Datagrid, TextField, EditButton } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const EditList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <List title={'Редактирование лендинга'}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick='edit'>
          <TextField source='id' />
          <TextField source='title' />
          <TextField source='body' />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

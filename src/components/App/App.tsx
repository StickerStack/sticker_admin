import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

import { authProvider } from '../../authProvider';
import { Dashboard } from '../Dashboard/Dashboard';
import { OrderList } from '../OrderList/OrderList';
import { EditList } from '../EditList/EditList';
import { EditForm } from '../EditForm/EditForm';

import OrderIcon from '@mui/icons-material/Book';
import EditIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import { ThemeOptions } from '@mui/material/styles';

import './App.css';
import { ShowOrder } from '../ShowOrder/ShowOrder';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#F16821',
      light: '#FFF7F3',
      dark: '#0C1F44',
    },
    secondary: {
      main: '#1a3263',
      light: 'rgba(26,50,99,0.8)',
      dark: '#0C1F44',
    },
    // background: {
    //   default: '#EAF1FF',
    // },
    info: {
      main: '#F16821',
    },
    text: {
      primary: '#1a3263',
      secondary: '#333',
      disabled: 'rgba(26,50,99,0.6)',
    },
    error: {
      main: '#D92F17',
    },
  },
};

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      theme={themeOptions}
      dashboard={Dashboard}
    >
      <Resource
        name='users'
        list={OrderList}
        icon={OrderIcon}
        show={ShowOrder}
        recordRepresentation='name'
      />
      <Resource name='posts' list={EditList} icon={EditIcon} edit={EditForm} />
    </Admin>
  );
}

export default App;

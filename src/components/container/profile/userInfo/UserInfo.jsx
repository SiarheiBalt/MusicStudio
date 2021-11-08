import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import { getUserLocalStorage } from '../../../../utils/localStorage';

import cl from './UserInfo.module.css';

const { email, name } = getUserLocalStorage();

export default function UserInfo() {
  return (
    <List className={cl.list}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={email} />
      </ListItem>
    </List>
  );
}

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import { getUserLocalStorage } from '../../../../utils/localStorage';

import cl from './UserInfo.module.css';

export default function UserInfo() {
  const { email, name } = getUserLocalStorage();

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

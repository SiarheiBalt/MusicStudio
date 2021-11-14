import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import cl from './SmallPreloader.module.css';

export default function SmallPreloader() {
  return (
    <div className={cl.container}>
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import cl from './Preloader.module.css';

export default function Preloader() {
  return (
    <div className={cl.container}>
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}

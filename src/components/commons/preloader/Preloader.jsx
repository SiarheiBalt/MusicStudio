import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import cl from './Preloader.module.css';

export default function Preloader({ height }) {
  return (
    <div className={cl.container} style={{ height: `${height}` }}>
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}

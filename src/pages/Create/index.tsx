import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import { styles } from './styles';

const Create: FC = (): JSX.Element => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} md={6} mb={4}>
        <Box>Blog Goes Here</Box>
      </Grid>
    </Grid>
  );
};

export default Create;

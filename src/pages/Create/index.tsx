import { Grid } from '@mui/material';

import { styles } from './styles';

const Create = (): JSX.Element => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} md={6} mb={4}>
        Hello World
      </Grid>
    </Grid>
  );
};

export default Create;

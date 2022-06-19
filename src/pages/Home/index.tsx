import { FC } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Paint } from '../../assets/svgs/Paint/Paint';
import { useNavigate } from 'react-router-dom';

import { styles } from './styles';

const Home: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Grid container sx={styles.landing}>
      <Grid container sx={styles.header}>
        <Grid item xs={12} md={6} mb={4}>
          <Typography variant="h3" sx={styles.heading}>
            <Typography component="span" variant="h2" sx={styles.mainText}>
              Blomogi:{' '}
            </Typography>
            Auto generated Emogi in Blog Post
          </Typography>
          <Button variant="contained" sx={styles.btn} onClick={() => navigate('/create')}>
            Create
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paint />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

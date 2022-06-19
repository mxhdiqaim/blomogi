import { FC } from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { styles } from './styles';

const Navbar: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Grid container sx={styles.container}>
      <Grid item xs={6} onClick={() => navigate('/')}>
        <Box sx={styles.logo}>
          <img src={logo} alt="logo" height={80} width={80} />
          <Typography variant="h6" sx={styles.text}>
            Blomogi
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={styles.grid}>
        <IconButton target="_blank" href="http://github.com/mxhdiqaim/blomogi" sx={styles.icon} disableRipple>
          <img
            src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
            alt="GitHub"
            style={{ width: '45px' }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Navbar;

import { Link, Typography } from '@mui/material';
import { FC } from 'react';
import { styles } from './styles';

const Footer: FC = (): JSX.Element => {
  return (
    <Typography variant="caption" sx={styles.text}>
      Powered by
      <Link mx={1} sx={styles.cursor} href="https://linode.com" target="_blank" underline="hover" rel="noreferrer">
        Linode
      </Link>
      &
      <Link mx={1} sx={styles.cursor} href="#" target="_blank" underline="hover" rel="noreferrer">
        DeepMogi.
      </Link>
      Created By{' '}
      <Link
        mx={1}
        sx={styles.cursor}
        href="https://github.com/mxhdiqaim"
        target="_blank"
        underline="hover"
        rel="noreferrer"
      >
        Mahdi.
      </Link>
      <Link mx={1} sx={styles.cursor} href="#" target="_blank" underline="hover" rel="noreferrer">
        Pixray
      </Link>
    </Typography>
  );
};

export default Footer;

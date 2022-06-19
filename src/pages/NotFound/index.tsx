import { Box } from '@mui/material';
import { FC } from 'react';
import { Missing } from '../../assets/svgs/Missing';
import { styles } from './styles';

const NotFound: FC = (): JSX.Element => {
  return (
    <Box sx={styles}>
      <Missing />
    </Box>
  );
};

export default NotFound;

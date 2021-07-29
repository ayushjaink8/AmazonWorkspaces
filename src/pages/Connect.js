import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Box, Container, Stack, Typography } from '@material-ui/core';
//iconify icon
import { Icon } from '@iconify/react';
import wiFiFill from '@iconify/icons-eva/wifi-fill';
// components
import Page from '../components/Page';

import DisplayScreen from 'src/components/_connect/displayScreen';

// ----------------------------------------------------------------------

export default function Connect() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     gender: '',
  //     category: '',
  //     colors: '',
  //     priceRange: '',
  //     rating: ''
  //   },
  //   onSubmit: () => {
  //     setOpenFilter(false);
  //   }
  // });

  // const { resetForm, handleSubmit } = formik;

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  // const handleResetFilter = () => {
  //   handleSubmit();
  //   resetForm();
  // };

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Connect To Amazon Workspaces&nbsp;
          <Icon icon={wiFiFill} width={22} height={22}/>
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 5 }}
        >
          <DisplayScreen/>
        </Stack>
      </Container>
    </Page>
  );
}

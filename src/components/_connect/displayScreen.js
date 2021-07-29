import React, { Component } from 'react'
import { Icon } from '@iconify/react';
import { Box, Container, Stack, Typography } from '@material-ui/core';

export class DisplayScreen extends Component {
  render() {
    return (
      <>
        <Container maxWidth="md">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '65vh' }} />
        </Container>
      </>
    )
  }
}

export default DisplayScreen

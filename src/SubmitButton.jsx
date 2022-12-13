import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SubmitButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={() => {
          alert('Form Submitted Successfully');
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}

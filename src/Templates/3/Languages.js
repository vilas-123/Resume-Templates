import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        h5: {
            color: orange[500]
        }
    }
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Language() {
    return (
        <div style={{ color: "#425061" }}>
            <Typography variant="h5" gutterBottom>
                Languages
            </Typography>
            <Stack direction="row" spacing={2}>
                <Item>English</Item>
                <Item>Hindi</Item>
                <Item>Chinese</Item>
            </Stack>
        </div>
    );
}
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './styles.module.css'

const Login = () => {
    return (
        <Stack
            className={styles.container}
            component="form"
            sx={{
                width: '40ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <TextField label="Username or Email" variant="outlined"/>
            <TextField label="Password" type="password" variant="outlined"/>
            <Button variant="contained" color="primary">Login</Button>
        </Stack>

    )
}

export default Login
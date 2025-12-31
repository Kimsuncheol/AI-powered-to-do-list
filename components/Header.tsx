import { AppBar, Toolbar } from '@mui/material';
import HeaderLogo from './header/HeaderLogo';
import HeaderActions from './header/HeaderActions';

export default function Header() {

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <HeaderLogo />
        <HeaderActions />
      </Toolbar>
    </AppBar>
  );
}

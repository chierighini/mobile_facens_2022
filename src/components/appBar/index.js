import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as S from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ title, goBack, navigation, isLoggedIn = true, children }) => {
  return (
    <>
      <S.Header sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            {goBack && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigation.goBack()}
              >
                <ArrowBackIosIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TopLista | {title}
            </Typography>
            {isLoggedIn && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigation.navigate('Carrinho')}
              >
                <ShoppingCartIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </S.Header>
      <S.Layout>{children}</S.Layout>
    </>
  );
};

export default Header;

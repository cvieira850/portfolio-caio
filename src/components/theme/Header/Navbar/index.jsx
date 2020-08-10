import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import CaioVieiraLogo from '../../../../assets/icons/CaioVieiraLogo.png';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        {/* <img src={CaioVieiraLogo} alt="logo" /> */}
        Caio Vieira
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;

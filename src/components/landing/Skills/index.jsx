import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="Eu sou o Caio e sou Desenvolvedor FullStack" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Atuo no mercado oferecendo soluções completas para sistemas web e mobile. </h1>
          <p>
            Sou apaixonado por tecnologia, passo meu tempo livre em busca de conhecimento e desenvolvimento de sistemas.
          </p>
          <Button as={AnchorLink} href="#contact">
            Entre em Contato
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao, Container } from './styles'

const Projeto = () => (
  <Container>
    <Card>
      <Titulo>Projeto e-Play</Titulo>
      <Paragrafo tipo={'secundario'}>Loja de Jogos - ePlay</Paragrafo>
      <LinkBotao href="https://github.com/AugustoSGSantos/react-eplay">
        GITHUB
      </LinkBotao>
      <LinkBotao href="https://react-eplay.vercel.app/">DEPLOY</LinkBotao>
    </Card>

    <Card>
      <Titulo>Projeto eFood</Titulo>
      <Paragrafo tipo={'secundario'}>eFood - Experência Gastronomica</Paragrafo>
      <LinkBotao href="https://github.com/AugustoSGSantos/efood-ebac">
        GITHUB
      </LinkBotao>
      <LinkBotao href="https://efood-ebac-rust.vercel.app/">DEPLOY</LinkBotao>
    </Card>

    <Card>
      <Titulo>Lista de Tarefas - Vue</Titulo>
      <Paragrafo tipo={'secundario'}>To Do List - Vue</Paragrafo>
      <LinkBotao href="https://github.com/AugustoSGSantos/todo-vue">
        GITHUB
      </LinkBotao>
      <LinkBotao href="https://todo-vue-eight-zeta.vercel.app/">
        DEPLOY
      </LinkBotao>
    </Card>

    <Card>
      <Titulo>Clone Disney+ </Titulo>
      <Paragrafo tipo={'secundario'}>Disney+</Paragrafo>
      <LinkBotao href="https://github.com/AugustoSGSantos/disneyplus_clone">
        GITHUB
      </LinkBotao>
      <LinkBotao href="https://disneyplus-clone-mu.vercel.app/">
        DEPLOY
      </LinkBotao>
    </Card>

    <Card>
      <Titulo>Lista de Contatos - Redux</Titulo>
      <Paragrafo tipo={'secundario'}>Lista de Contatos</Paragrafo>
      <LinkBotao href="https://github.com/AugustoSGSantos/redux_contatos">
        GITHUB
      </LinkBotao>
      <LinkBotao href="https://redux-contatos-phi.vercel.app/">
        DEPLOY
      </LinkBotao>
    </Card>
  </Container>
)

export default Projeto

import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Me chamo Augusto, tenho 23 anos, sou Desenvolvedor Front-End, as
      principais ferramentas que utilizo são React, JavaScript, Typescript. Sou
      formado em Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul e em
      Engenharia Front-End pela EBAC. Estou em busca do meu primeiro emprego na
      área de desenvolvimento.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=AugustoSGSantos&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AugustoSGSantos&layout=compact&langs_count=7&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre

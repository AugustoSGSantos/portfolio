import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ea
      voluptatem sequi quidem aliquid id dolorem laborum dignissimos fuga
      voluptates totam tempora nemo commodi, suscipit quaerat, ipsam consequatur
      aut voluptas.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=AugustoSGSantos&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AugustoSGSantos&layout=compact&langs_count=7&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre

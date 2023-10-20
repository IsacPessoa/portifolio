import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
      tenetur quis commodi ratione itaque officia reprehenderit, numquam nemo
      labore error sequi provident accusamus dolores fugiat ullam laborum
      ducimus, qui autem!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=IsacPessoa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=IsacPessoa&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

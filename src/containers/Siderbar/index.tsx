import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Isac Pessoa</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        IsacPessoa
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Java
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

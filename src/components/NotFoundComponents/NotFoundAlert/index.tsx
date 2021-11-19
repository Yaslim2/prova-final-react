import { NotFoundContainer, AlertTriangleImg, NotFoundText } from './styles'
import alertTriangleSvg from '@assets/img/alert-triangle.svg'
const NotFoundAlert: React.FC = () => {
    return <NotFoundContainer>
        <AlertTriangleImg src={alertTriangleSvg} alt="" />
        <NotFoundText>Página não encontrada</NotFoundText>
    </NotFoundContainer>
}

export default NotFoundAlert;
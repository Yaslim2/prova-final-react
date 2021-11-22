import { NotFoundContainer, AlertTriangleImg, NotFoundText } from './styles'
import { alertTriangleSvg } from '@assets/img'
const NotFoundAlert: React.FC = () => {
    return <NotFoundContainer>
        <AlertTriangleImg src={alertTriangleSvg} alt="" />
        <NotFoundText>Page not found!</NotFoundText>
    </NotFoundContainer>
}

export default NotFoundAlert;
import { BallStyle } from './styles'
const Balls: React.FC = (props) => {
    return <BallStyle>{props.children}</BallStyle>
}

export default Balls;
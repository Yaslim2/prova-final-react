import { BallStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../../store/gameSlice';
import { RootState } from '../../../store';

const Balls: React.FC = (props) => {
    const ballNumber = Number(props.children);
    const { selectBall } = gameActions
    const dispatch = useDispatch();
    const selectedBalls = useSelector((state: RootState) => state.game.selectedBalls);
    const actualGame = useSelector((state: RootState) => state.game.actualGame);

    const handleClickBall = () => {
        props.children && dispatch(selectBall({ ball: ballNumber }));
    }

    const isSelected = selectedBalls.find((ball) => ball === ballNumber);

    return <BallStyle bgColor={actualGame.color} isSelected={isSelected} onClick={handleClickBall}>{props.children}</BallStyle>
}

export default Balls;
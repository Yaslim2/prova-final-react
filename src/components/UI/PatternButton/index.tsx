import { MouseEvent } from 'react'
import { Button } from './styles'
const PatternButton: React.FC<{ isActive?: boolean, color?: string, gameButton?: boolean, onClick?: (event: MouseEvent) => void }> = (props) => {
    return (
        <Button onClick={props.onClick} gameButton={props.gameButton} isActive={props.isActive} activeColor={props.color}>{props.children}</Button>
    )
}

export default PatternButton
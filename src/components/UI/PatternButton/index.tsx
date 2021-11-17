import React, { MouseEvent } from 'react'
import { Button } from './styles'
const PatternButton: React.FC<{ isActive?: boolean, color?: string, gameButton?: boolean, onFilter?: (event: MouseEvent) => void, onSelect?: (event: MouseEvent) => void }> = (props) => {
    const handleClick = (event: React.MouseEvent) => {
        props.onFilter && props.onFilter(event);
        props.onSelect && props.onSelect(event);
    }
    return (
        <Button onClick={handleClick} gameButton={props.gameButton} isActive={props.isActive} activeColor={props.color}>{props.children}</Button>
    )
}

export default PatternButton
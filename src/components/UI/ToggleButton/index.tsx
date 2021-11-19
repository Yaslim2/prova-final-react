import { ToggleButtonArea, ToggleButtonIcon } from "./styles";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import menuSvg from '@assets/img/menu.svg'
import closeSvg from '@assets/img/x-circle.svg'
import { ToggleButtonProps } from "./types";
const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
    const isToggle = useSelector((state: RootState) => state.toggle.isToggle);
    const imgRender = isToggle ? closeSvg : menuSvg;
    return (
        <ToggleButtonArea onClick={props.onToggle}>
            <ToggleButtonIcon src={imgRender} />
        </ToggleButtonArea>
    );
};

export default ToggleButton
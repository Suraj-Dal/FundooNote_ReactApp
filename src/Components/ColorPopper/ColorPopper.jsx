import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { setColor } from '../../Services/DataService';

export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"]

    const takeColor = async (color) => {
        if (props.action === "create")
        {
            props.listenToColorPopper(color)
        }
        else if (props.action === "update")
        {
            await setColor(color, props.id)
        }
    }

    return (
        <div>
            <ColorLensOutlinedIcon fontSize='smaller' onClick={handleClick} style={{cursor:"pointer", display:"flex"}}/>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ p: 1, bgcolor: 'background.paper', display: "flex", flexWrap:"wrap", boxShadow: '1px 1px 6px 1px rgba(0,0,0,0.3)', borderRadius:"8px" }}>
                    {
                        colors.map((color) => (
                        <div style={{ width: 35, height: 35, marginRight: 5, backgroundColor:color, borderRadius:50 }} onClick={() => takeColor(color)}>

                        </div>))
                    }
                </Box>
            </Popper>
        </div>
    );
}

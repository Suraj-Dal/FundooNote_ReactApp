import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const colors = ["LightSalmon","Pink","PapayaWhip","Khaki","Lavender","Thistle","GreenYellow","Aquamarine","BlanchedAlmond","Gainsboro","AliceBlue"]

    const takeColor = (color) => {
        if (props.action === "create")
        {
            props.listenToColorPopper(color)
        }
        else if (props.action === "update")
        {
            props.listenToColorPopper(color)
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

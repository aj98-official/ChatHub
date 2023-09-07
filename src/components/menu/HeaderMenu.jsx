import { useState, useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";


const HeaderMenu = ({ setOpenDrawer }) => {

    const { setAccount } = useContext(AccountContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => { setOpenDrawer(true); handleClose(); }}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => { handleClose(); setAccount(null); }}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default HeaderMenu;

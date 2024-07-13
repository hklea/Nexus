import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import Tooltip from "@mui/material/Tooltip";

function More({ size }: { size: any }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center", bgcolor: "transparent"}}
        >
          <Tooltip title="Account settings" className="">
            <IconButton
              onClick={handleClick}
              size="large"
              sx={{ mt: 0 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            
            >
              
                <ReorderIcon fontSize={size}className="text-black w-[40px] text-[white]  h-24 "/>
         
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {/* <Divider /> */}
          <MenuItem onClick={handleClose}>Add another account</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default More;

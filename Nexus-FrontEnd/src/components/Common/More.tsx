import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import Tooltip from "@mui/material/Tooltip";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

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
        
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            bgcolor: "transparent",
          }}
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
              <ReorderIcon
                fontSize={size}
                className=" w-[40px] text-white  h-24 "
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          style={{ padding: "0px"}}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          className=""
        >
       

          <MenuItem
            style={{ paddingBottom: "0px", paddingTop: "0px" }}
            onClick={handleClose}
          >
            <div className="flex  w-[100%] justify-left">
              <HomeOutlinedIcon className="text-[#585858] " />
              <p className="text-[12.3px] grid items-center text-start  text-[#585858] font-lato ml-[10px]">
                HOME
              </p>
            </div>
          </MenuItem>


          <MenuItem
            style={{ paddingBottom: "0px", paddingTop: "0px" }}
            onClick={handleClose}
          >
            <div className="flex  w-[100%] justify-left">
            
              <GroupsOutlinedIcon className="text-[#585858] " />
              <p className="text-[12.3px] grid items-center text-start  text-[#585858] font-lato ml-[10px]">
                ABOUT
              </p>
            </div>
          </MenuItem>

          <MenuItem
            style={{ paddingBottom: "0px", paddingTop: "0px" }}
            onClick={handleClose}
          >
            <div className="flex  w-[100%] justify-left">
              <DevicesOutlinedIcon className="text-[#585858] " />
              <p className="text-[12.3px] grid items-center text-start  text-[#585858] font-lato ml-[10px]">
                SERVICE
              </p>
            </div>
          </MenuItem>

          <MenuItem
            style={{ paddingBottom: "0px", paddingTop: "0px" }}
            onClick={handleClose}
          >
            <div className="flex  w-[100%] justify-around">
              <PublicOutlinedIcon className="text-[#585858] " />
              <p className="text-[12.3px] grid items-center text-start  text-[#585858] font-lato ml-[10px]">
                PORTOFOLIO
              </p>
            </div>
          </MenuItem>

          <MenuItem
            style={{ paddingBottom: "0px", paddingTop: "0px" }}
            onClick={handleClose}
          >
            <div className="flex  w-[100%] justify-around">
              <PhoneOutlinedIcon className="text-[#585858] " />
              <p className="text-[12.3px] grid items-center text-start  text-[#585858] font-lato ml-[10px]">
                CONTACT US
              </p>
            </div>
          </MenuItem>

         

        </Menu>
      </React.Fragment>
    </div>
  );
}

export default More;

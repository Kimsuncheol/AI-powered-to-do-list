'use client';
import React from 'react';
import { 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText,
} from '@mui/material';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

interface ShareMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: (event?: React.MouseEvent<HTMLElement>) => void;
  shareUrl: string;
  title: string;
  description?: string;
}

export default function ShareMenu({ 
  anchorEl, 
  open, 
  onClose, 
  shareUrl, 
  title, 
  description 
}: ShareMenuProps) {
  const handleClose = (event?: React.MouseEvent<HTMLElement>) => {
    if (event) event.stopPropagation();
    onClose(event);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => handleClose()}
      onClick={(e) => e.stopPropagation()} 
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        elevation: 3,
        sx: { minWidth: 200, mt: 1.5 }
      }}
    >
      <FacebookShareButton url={shareUrl} style={{ width: '100%' }}>
        <MenuItem onClick={(e) => handleClose(e)}>
          <ListItemIcon><FacebookIcon size={24} round /></ListItemIcon>
          <ListItemText primary="Facebook" />
        </MenuItem>
      </FacebookShareButton>
      
      <TwitterShareButton url={shareUrl} title={title} style={{ width: '100%' }}>
        <MenuItem onClick={(e) => handleClose(e)}>
          <ListItemIcon><TwitterIcon size={24} round /></ListItemIcon>
          <ListItemText primary="Twitter" />
        </MenuItem>
      </TwitterShareButton>
      
      <LinkedinShareButton url={shareUrl} title={title} summary={description} style={{ width: '100%' }}>
        <MenuItem onClick={(e) => handleClose(e)}>
          <ListItemIcon><LinkedinIcon size={24} round /></ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </MenuItem>
      </LinkedinShareButton>
      
      <WhatsappShareButton url={shareUrl} title={title} style={{ width: '100%' }}>
        <MenuItem onClick={(e) => handleClose(e)}>
          <ListItemIcon><WhatsappIcon size={24} round /></ListItemIcon>
          <ListItemText primary="WhatsApp" />
        </MenuItem>
      </WhatsappShareButton>
    </Menu>
  );
}

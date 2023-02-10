import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const NavigationMenu: React.FC = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          _focus={{
            boxShadow: "none",
          }}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />}>Create Community</MenuItem>

          <MenuItem key={0}>
            <Avatar mr="2" size="xs" src="https://bit.ly/broken-link" />
            r/reddit
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavigationMenu;

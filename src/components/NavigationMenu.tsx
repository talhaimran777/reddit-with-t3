import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import CreateCommunityModal from "components/CreateCommunityModal";
import React, { useState } from "react";

const NavigationMenu: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <Box ml="2">
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
          <MenuItem icon={<AddIcon />} onClick={() => setShow(true)}>
            Create Community
          </MenuItem>
          <MenuItem key={0}>
            <Avatar mr="2" size="xs" src="https://bit.ly/broken-link" />
            r/reddit
          </MenuItem>
        </MenuList>
      </Menu>
      <CreateCommunityModal show={show} setShow={setShow} />
    </Box>
  );
};

export default NavigationMenu;

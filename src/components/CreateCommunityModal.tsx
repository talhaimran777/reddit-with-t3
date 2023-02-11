import { CloseIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Button from "components/Button";
import React from "react";

interface Props {
  show: boolean;
  setShow: any;
}

const commonButtonStyles: any = {
  py: "1.5",
  px: "4",
  cursor: "pointer",
};

const cancelButtonStyles: any = {
  mr: "2",
};

const CreateCommunityModal: React.FC<Props> = ({ show, setShow }) => {
  const [form, setForm] = React.useState({
    type: "public",
    name: "",
  });

  const handleCommunityCreation = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  const handleRadioChange = (value: string) => {
    interface Target {
      name?: string;
      value?: string;
    }

    interface Event {
      target: Target;
    }

    const event: Event = {
      target: {},
    };

    event.target.name = "type";
    event.target.value = value;

    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const content = (
    <ModalBody>
      <form onSubmit={handleCommunityCreation}>
        <FormControl mb={5} isRequired isInvalid={false}>
          <FormLabel htmlFor="name" fontWeight="medium">
            Name
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="name"
            onChange={(event) =>
              setForm({ ...form, [event.target.name]: event.target.value })
            }
          />
          <FormHelperText fontSize="xs">
            Community names including capitalization cannot be changed.
          </FormHelperText>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel htmlFor="type" fontWeight="medium">
            Community Type
          </FormLabel>
          <RadioGroup onChange={handleRadioChange} value={form.type}>
            <Stack>
              <Radio value="public">
                <Text fontSize="sm" fontWeight="medium">
                  Public
                </Text>
              </Radio>
              <Radio value="restricted">
                <Text fontSize="xs" fontWeight="medium">
                  Restricted
                </Text>
              </Radio>
              <Radio value="private">
                <Text fontSize="xs" fontWeight="medium">
                  Private
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </form>
    </ModalBody>
  );

  const header = (
    <ModalHeader>
      <Flex justify="space-between" align="center">
        <Text color="pt" fontWeight="extrabold" fontSize="md" flex="1">
          Create Community
        </Text>
        <CloseIcon
          fontSize="12px"
          onClick={() => setShow(false)}
          cursor="pointer"
        />
      </Flex>
    </ModalHeader>
  );

  const footer = (
    <ModalFooter>
      <Button
        text={"Cancel"}
        secondary={true}
        customStyling={{ ...commonButtonStyles, ...cancelButtonStyles }}
        handlers={{ onClick: () => setShow(false) }}
      />
      <Button
        text={"Create Community"}
        primary={true}
        customStyling={{ ...commonButtonStyles }}
        handlers={{ onClick: handleCommunityCreation, type: "submit" }}
      />
    </ModalFooter>
  );

  return (
    <>
      <Modal isOpen={show} isCentered onClose={() => setShow(false)}>
        <ModalOverlay />
        <ModalContent>
          {header}
          <Divider />
          {content}
          <Divider />
          {footer}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;

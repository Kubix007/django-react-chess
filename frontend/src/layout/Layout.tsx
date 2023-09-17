import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex direction="column" minH="100vh">
      <Flex ml={"auto"} p={"10px"}>
        <ColorModeSwitcher />
      </Flex>
      {children}
    </Flex>
  );
};

export default Layout;

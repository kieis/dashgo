import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({base: false, lg: true})

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="28" mx="auto" mt="4" align="center" px="6">
            { !isWideVersion && (
                <IconButton display="flex" alignItems="center" justifyContent="center"
                    aria-label="Open Navigation" 
                    variant="unstyled" 
                    icon={<Icon as={RiMenuLine} fontSize="24" onClick={onOpen} mr="2"/>} 
                />
            )}

            <Logo />
            { isWideVersion && (<SearchBox />)}

            <Flex align="center" ml="auto">
                <NotificationsNav />
            </Flex>

            <Profile showProfileData={isWideVersion} />
        </Flex>
    );
}
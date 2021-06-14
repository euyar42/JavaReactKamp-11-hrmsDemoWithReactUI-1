import React, { useState, useEffect } from "react";
import { Menu, Container, Image, Header } from "semantic-ui-react";
import DropdownProfile from "./components/DropdownProfile";
import Search from "./components/Search";
import SignInOrUpButtonGroup from "./components/SignInOrUpButtonGroup";

export default function NavBar() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    setisAuthenticated(true);
  }, []);

  return (
    <div>
      <Menu size="small" secondary inverted color="blue" fixed="top">
        <Container>
          <Menu.Item>
            <Header inverted as="h2">
              <Image src="logo192.png" /> HRMS
            </Header>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Search />
            </Menu.Item>

            <Menu.Item>
              {isAuthenticated ? (
                <DropdownProfile />
              ) : (
                <SignInOrUpButtonGroup />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

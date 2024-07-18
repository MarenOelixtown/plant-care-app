import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { HomeIconLight } from "./Icons/HomeIconLight";
import { HomeIconDark } from "./Icons/HomeIconDark";
import { OverviewIconLight } from "./Icons/OverviewIconLight";
import { OverviewIconDark } from "./Icons/OverviewIconDark";
import { MyPlantsIconLight } from "./Icons/MyPlantsIconLight";
import { MyPlantsIconDark } from "./Icons/MyPlantsIconDark";
import LightMode from "./Icons/LightMode.svg";
import DarkMode from "./Icons/DarkMode.svg";

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;

const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;
const IconListItem = styled.li`
  background-color: ${(props) => props.$bgColor || ""};
  text-align: center;
  margin-bottom: 0;
  padding: 5px;
  border-radius: ${(props) => (props.$bgColor ? "15px" : "0")};
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px;
`;

export default function NavigationBar({ darkMode, onToggleDarkMode }) {
  const router = useRouter();
  const getFillColor = (path) =>
    router.pathname === path ? "var(--primary-color)" : "var(--primary-color)";
  const getBackgroundColor = (path) =>
    router.pathname === path
      ? darkMode
        ? "var(--dark-light-grey)"
        : "var(--lightest-green)"
      : "";
  return (
    <StyledFooter darkMode={darkMode}>
      <nav>
        <NavigationList>
          <IconListItem $bgColor={getBackgroundColor("/")}>
            <Link href="/" title="Home">
              {darkMode ? (
                <HomeIconDark getFillColor={getFillColor("/")} />
              ) : (
                <HomeIconLight getFillColor={getFillColor("/")} />
              )}
            </Link>
          </IconListItem>
          <IconListItem $bgColor={getBackgroundColor("/overview")}>
            <Link href="/overview" title="Plants Overview">
              {darkMode ? (
                <OverviewIconDark getFillColor={getFillColor("/")} />
              ) : (
                <OverviewIconLight getFillColor={getFillColor("/")} />
              )}
            </Link>
          </IconListItem>
          <IconListItem $bgColor={getBackgroundColor("/myplants")}>
            <Link href="/myplants" title="My Plants">
              {darkMode ? (
                <MyPlantsIconDark getFillColor={getFillColor("/")} />
              ) : (
                <MyPlantsIconLight getFillColor={getFillColor("/")} />
              )}
            </Link>
          </IconListItem>
          <IconListItem>
            <ToggleButton onClick={onToggleDarkMode}>
              {darkMode ? <DarkMode /> : <LightMode />}
            </ToggleButton>
          </IconListItem>
        </NavigationList>
      </nav>
    </StyledFooter>
  );
}

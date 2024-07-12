import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import HomeIcon from "./Icons/HomeIcon.svg";
import PlantOverviewIcon from "./Icons/PlantOverviewIcon.svg";
import MyPlantsIcon from "./Icons/MyPlantsIcon.svg";

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: white;
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
  flex: 1;
  text-align: center;
  padding: 10px;
`;

export default function NavigationBar() {
  const router = useRouter();
  const iconColor = (path) =>
    router.pathname === path
      ? "var(--secondary-stroke-color)"
      : "var(--primary-color)";
  const backgroundColor = (path) =>
    router.pathname === path ? "var(--secondary-bg-color)" : "";

  return (
    <StyledFooter>
      <nav>
        <NavigationList>
          <IconListItem $bgColor={backgroundColor("/")}>
            <Link href="/" title="Home">
              <HomeIcon stroke={iconColor("/")} />
            </Link>
          </IconListItem>
          <IconListItem $bgColor={backgroundColor("/overview")}>
            <Link href="/overview" title="Plants Overview">
              <PlantOverviewIcon
                stroke={iconColor("/overview")}
                fill={iconColor("/overview")}
              />
            </Link>
          </IconListItem>
          <IconListItem $bgColor={backgroundColor("/myplants")}>
            <Link href="/myplants" title="My Plants">
              <MyPlantsIcon fill={iconColor("/myplants")} />
            </Link>
          </IconListItem>
        </NavigationList>
      </nav>
    </StyledFooter>
  );
}

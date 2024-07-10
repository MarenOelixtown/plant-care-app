import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { HomeIcon } from "./HomeIcon";
import { PlantOverviewIcon } from "./PlantOverviewIcon";
import { MyPlantsIcon } from "./MyPlantsIcon";

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
  const getFillColor = (path) =>
    router.pathname === path
      ? "var(--secondary-stroke-color)"
      : "var(--primary-color)";
  const getBackgroundColor = (path) =>
    router.pathname === path ? "var(--secondary-bg-color)" : "";

  return (
    <StyledFooter>
      <nav>
        <NavigationList>
          <IconListItem $bgColor={getBackgroundColor("/")}>
            <Link href="/" title="Home">
              <HomeIcon getFillColor={getFillColor("/")} />
            </Link>
          </IconListItem>
          <IconListItem $bgColor={getBackgroundColor("/overview")}>
            <Link href="/overview" title="Plants Overview">
              <PlantOverviewIcon getFillColor={getFillColor("/overview")} />
            </Link>
          </IconListItem>
          <IconListItem $bgColor={getBackgroundColor("/myplants")}>
            <Link href="/myplants" title="My Plants">
              <MyPlantsIcon getFillColor={getFillColor("/myplants")} />
            </Link>
          </IconListItem>
        </NavigationList>
      </nav>
    </StyledFooter>
  );
}
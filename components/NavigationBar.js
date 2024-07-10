import Link from "next/link";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

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

const MyPlantsIcon = ({ getFillColor }) => (
  <svg
    width="45px"
    height="45px"
    strokeWidth="0"
    fill={getFillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <title>My Plant Icon</title>
    <path d="M486.509,339.16a39.2,39.2,0,0,0-45.384-20.305l-25.421,6.94A159.995,159.995,0,0,0,277.338,224.354V184.031q5.3.411,10.671.419,1.2,0,2.411-.021a139.061,139.061,0,0,0,87.22-32.376c24.424-20.635,38.869-47.925,40.675-76.844a95,95,0,0,0-1.179-22.079,10.666,10.666,0,0,0-8.788-8.71,136.06,136.06,0,0,0-24.258-1.733A139.068,139.068,0,0,0,296.87,75.064a119.04,119.04,0,0,0-30.2,38.018,119.039,119.039,0,0,0-30.2-38.018,139.065,139.065,0,0,0-87.22-32.376A135.447,135.447,0,0,0,125,44.42a10.666,10.666,0,0,0-8.788,8.71,95.008,95.008,0,0,0-1.179,22.079c1.806,28.918,16.251,56.208,40.675,76.843a139.061,139.061,0,0,0,87.22,32.376q1.206.021,2.411.021,5.363,0,10.67-.419v40.328a159.729,159.729,0,0,0-123.338,72.214L101.62,307.214v-2.651a21.764,21.764,0,0,0-21.74-21.74h-36.8a21.764,21.764,0,0,0-21.74,21.74V447.593a21.765,21.765,0,0,0,21.74,21.741h36.8a21.765,21.765,0,0,0,21.74-21.741v-4.744l78.793,17.523a128.772,128.772,0,0,0,27.883,3.063h78.8a129.315,129.315,0,0,0,54.37-12.069l126.567-59.11a39.243,39.243,0,0,0,18.478-53.095ZM277.486,153.236c3.012-48.227,51-88.25,106.974-89.219a116.309,116.309,0,0,1,12.563.457,74.761,74.761,0,0,1,0,9.405c-3.012,48.227-51,88.251-106.974,89.219a115.882,115.882,0,0,1-12.563-.456A74.77,74.77,0,0,1,277.486,153.236Zm-21.63,9.406a116.186,116.186,0,0,1-12.563.456c-55.973-.968-103.961-40.992-106.974-89.218a74.77,74.77,0,0,1,0-9.406,116.358,116.358,0,0,1,12.563-.457c55.973.969,103.96,40.992,106.974,89.218A74.778,74.778,0,0,1,255.856,162.642Zm10.806,82.691a138.109,138.109,0,0,1,128.359,86.109l-45.766,12.495a107.111,107.111,0,0,1-21,3.533c9.04-9.274,18.94-22.329,19.235-41.839a22.46,22.46,0,0,0-22.461-22.783h-.052l-132.037.3a128.307,128.307,0,0,0-23.922,2.326A137.736,137.736,0,0,1,266.662,245.333ZM80.288,447.593a.407.407,0,0,1-.407.407h-36.8a.407.407,0,0,1-.407-.407V304.564a.407.407,0,0,1,.407-.406h36.8a.407.407,0,0,1,.407.406ZM468.321,362.6A17.75,17.75,0,0,1,459,372.926l-126.566,59.11A107.851,107.851,0,0,1,287.094,442.1H208.3a107.4,107.4,0,0,1-23.254-2.554L101.62,420.994V329.766L158.5,310.272a106.93,106.93,0,0,1,34.493-5.788l132.037-.3h0a1.1,1.1,0,0,1,.81.342,1.056,1.056,0,0,1,.32.784c-.154,10.164-4.252,18.348-14.144,28.25a47.941,47.941,0,0,1-34.13,14.157H207.154a10.667,10.667,0,0,0,0,21.333H321.035a128.537,128.537,0,0,0,33.838-4.53l91.879-25.084a17.894,17.894,0,0,1,21.57,23.165Z"></path>
  </svg>
);
const PlantOverviewIcon = ({ getFillColor }) => (
  <svg
    width="45px"
    height="45px"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="0.5"
    stroke={getFillColor}
    fill={getFillColor}
  >
    <title>Plant Overview Icon</title>
    <g data-name="Layer 24" id="Layer_24">
      <path
        className="cls-1"
        d="M42.81,20.66a17.31,17.31,0,0,1-5.6-.95l-.94-.36.36-.94c.09-.23,2.25-5.7,7.11-7.87h0c4.86-2.17,10.38-.13,10.61,0l.95.35-.37.94c-.09.24-2.25,5.71-7.11,7.88A12.19,12.19,0,0,1,42.81,20.66ZM39,18.15c1.67.43,5.08,1,8-.31s4.8-4.25,5.6-5.78c-1.68-.43-5.09-1-8,.3h0C41.58,13.69,39.75,16.62,39,18.15Zm5.19-6.7h0Z"
      />
      <path
        className="cls-1"
        d="M34.61,22.27l-1-.12c-.25,0-6.09-.77-9.39-4.94s-2.68-10-2.66-10.28l.12-1,1,.12c.24,0,6.08.78,9.38,5s2.69,10,2.66,10.27ZM23.5,8.24c0,1.74.28,5.18,2.29,7.72a12.67,12.67,0,0,0,7,4c0-1.73-.27-5.17-2.29-7.72h0C28.48,9.7,25.19,8.64,23.5,8.24Z"
      />
      <path
        className="cls-1"
        d="M32,36h0a1,1,0,0,1-1-1c0-.6.08-14.75,6.69-16.95a1,1,0,0,1,1.26.63A1,1,0,0,1,38.28,20C33.92,21.4,33,31.31,33,35A1,1,0,0,1,32,36Z"
      />
      <path
        className="cls-1"
        d="M43.27,60H20.73a1,1,0,0,1-1-.91L18,39.09A1,1,0,0,1,19,38H45a1,1,0,0,1,1,1.09l-1.74,20A1,1,0,0,1,43.27,60ZM21.65,58h20.7l1.56-18H20.09Z"
      />
      <path
        className="cls-1"
        d="M47,40H17a1,1,0,0,1-1-1V35a1,1,0,0,1,1-1H47a1,1,0,0,1,1,1v4A1,1,0,0,1,47,40ZM18,38H46V36H18Z"
      />
    </g>
  </svg>
);
const HomeIcon = ({ getFillColor }) => (
  <svg
    width="45px"
    height="45px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1"
    fill="none"
    stroke={getFillColor}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

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
    </StyledFooter>
  );
}

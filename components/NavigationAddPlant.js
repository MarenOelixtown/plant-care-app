import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: fixed;
  top: 2rem;
  right: 2.5rem;
  color: ${(props) =>
    props.darkMode ? "var(--primary-color)" : "var(--light-yellow)"};
  background-color: ${(props) =>
    props.darkMode ? "var(--light-green)" : "var(--primary-color)"};
  padding: 0.8rem 0.8rem;
  border-radius: 2rem;
  border: 2px solid var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  z-index: 1000;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--light-yellow)" : "var(--primary-color)"};
  }
  @media (max-width: 900px) {
    right: 1rem;
  }
`;

export default function NavigationAddPlant({ darkMode }) {
  const router = useRouter();
  const buttonRef = useRef(null);
  const hiddenPaths = [`/createplant`, `/`, `/myschedule`, `/scheduleform`];

  return (
    <StyledLink
      darkMode={darkMode}
      href="/createplant"
      hidden={hiddenPaths.includes(router.pathname)}
      ref={buttonRef}
    >
      + Plant
    </StyledLink>
  );
}

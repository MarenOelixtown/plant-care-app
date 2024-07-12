import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: fixed;
  top: 2rem;
  right: 2.5rem;
  color: var(--light-yellow);
  background-color: var(--primary-color);
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
    color: var(--primary-color);
    background-color: var(--light-green);
    border-color: var(--primary-color);
  }

  &.translucent {
    opacity: 0.5;
  }
`;

export default function NavigationAddPlant() {
  const router = useRouter();
  const hiddenPaths = [`/createplant`, `/`];
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          button.classList.add("translucent");
        } else {
          button.classList.remove("translucent");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
    });

    document.querySelectorAll("div, footer,  button").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledLink
      href="/createplant"
      hidden={hiddenPaths.includes(router.pathname)}
      ref={buttonRef}
    >
      + Plant
    </StyledLink>
  );
}

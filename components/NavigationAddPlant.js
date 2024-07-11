import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const AddPlant = styled.p`
  position: fixed;
  top: 2.5rem;
  right: 2rem;
  border: 3px solid var(--secondary-stroke-color);
  background-color: var(--secondary-bg-color);
  padding: 0.8rem 0.8rem;
  border-radius: 1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  z-index: 1000;
  cursor: pointer;
  &:hover {
    color: var(--secondary-stroke-color);
    background-color: white;
  }
`;

export default function NavigationAddPlant() {
  const router = useRouter();
  const hiddenPaths = [`/createplant`, `/`, `/myschedule`, `/scheduleform`];

  return (
    <Link href="/createplant">
      <AddPlant hidden={hiddenPaths.includes(router.pathname)}>
        + plant
      </AddPlant>
    </Link>
  );
}

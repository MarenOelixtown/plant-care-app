import styled from "styled-components";

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e4ebdc;
  color: #30482a;
  font-size: 1.5rem;
`;
export default function LoadingWrapper() {
  return <StyledLoading>Is Loading...</StyledLoading>;
}

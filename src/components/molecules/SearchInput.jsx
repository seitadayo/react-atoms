import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SBUttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SBUttonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SBUttonWrapper = styled.div`
  padding-left: 8px;
`;

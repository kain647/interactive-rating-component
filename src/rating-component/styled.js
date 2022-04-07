import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const StarBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #191f2a;
  p {
    color: #cbc2c2;
  }
`;
export const ResultBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #191f2a;
  p {
    color: #cbc2c2;
  }
`;
export const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202631;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 10px;
  margin-right: auto;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 22px;
    color: #fc7614;
  }
`;
export const Title = styled.h3`
  display: flex;
  width: 100%;
  align-items: flex-start;
  font-size: 24px;
  color: #cbc2c2;
`;
export const RateBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const NumBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${({ active }) => (active ? "#fc7614" : "#272b35")};
  cursor: pointer;
  //:hover {
  //  background-color: #7b8593;
  //}
`;
export const ButtonSubmit = styled.button`
	border-style: none;
	box-sizing: border-box;
  display: flex;
  width: 70%;
  padding: 15px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #fb7413;
  color: #cbc2c2;
  font-weight: 500;
  margin-bottom: 25px;
  cursor: pointer;
	&:disabled{
		opacity: 0.2;
		cursor: not-allowed;
	}
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const Result = styled.div`
  display: flex;
  margin: 24px;
  padding: 8px 16px;
  border-radius: 50px;
  color: #f09351;
  background-color: #202631;
  font-weight: 200;
`;
export const ResultTitle = styled.h2`
  display: flex;
  color: #cbc2c2;
`;

import React, { useState } from "react";
import {
  Container,
  Star,
  StarBox,
  Title,
  RateBox,
  NumBtn,
  ButtonSubmit,
  ResultBox,
  Header,
  Result,
  ResultTitle,
} from "./styled";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  const [front, isFront] = useState(true);
  const [selected, setSelected] = useState(0);
  const handleSubmit = () => {
    isFront(!front);
  };
  return (
    <Container>
      {front ? (
        <StarBox>
          <Star>
            <AiFillStar />
          </Star>
          <Title>How did we do?</Title>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <RateBox>
            {[1, 2, 3, 4, 5].map((item) => (
              <NumBtn
                key={item}
                onClick={() => setSelected(item)}
                active={selected === item}
              >
                {item}
              </NumBtn>
            ))}
          </RateBox>
          <ButtonSubmit onClick={handleSubmit} disabled={selected < 1}>
            SUBMIT
          </ButtonSubmit>
        </StarBox>
      ) : (
        <ResultBox>
          <Header>
            <img src={"images/illustration-thank-you.svg"} />
          </Header>
          <Result>You selected {selected} out of 5</Result>
          <ResultTitle>Thank you!</ResultTitle>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </ResultBox>
      )}
    </Container>
  );
};

export default Rating;

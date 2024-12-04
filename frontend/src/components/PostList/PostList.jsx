import { useSelector } from "react-redux";
import { Post } from "../Post/Post";
import { selectAllPosts } from "../../redux/posts/selectors";
import { PostListStyled, Li, Title, Wrapper } from "./PostList.styled";

export const PostList = () => {
  const cards = useSelector(selectAllPosts);

  return (
    <Wrapper>
      <Title>Open Deals</Title>
      <PostListStyled>
        {cards.map(({ id, image, title, price, ticket, yeld, days, sold }) => (
          <Li key={id}>
            <Post
              id={id}
              image={image}
              title={title}
              price={price}
              ticket={ticket}
              yeld={yeld}
              days={days}
              sold={sold}
            />
          </Li>
        ))}
      </PostListStyled>
    </Wrapper>
  );
};

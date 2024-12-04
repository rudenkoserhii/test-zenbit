import { splitNumber } from "../../utils/splitNumber";
import { PostStyled, DataBox, DataStyled, NameStyled } from "./Post.styled";
import PropTypes from "prop-types";

export const Post = ({ image, title, price, ticket, yeld, days, sold }) => {
  // function onClickHandler(e) {
  //   e.target.classList.toggle("flip-scale-up-hor");
  // }

  return (
    <PostStyled
      href="#"
      $picture={`data:image/jpg;base64,${image}`}
      // onClick={onClickHandler}
    >
      <NameStyled>{title}</NameStyled>
      <DataBox>
        <DataStyled>{`${splitNumber(price)} Dhs`}</DataStyled>
        <DataStyled>{`Yield ${Number(yeld)}%`}</DataStyled>
        <DataStyled>{`Sold ${sold}%`}</DataStyled>
        <DataStyled>{`Tiket - ${splitNumber(ticket)} Dhs`}</DataStyled>
        <DataStyled>{`Days left ${days}`}</DataStyled>
      </DataBox>
    </PostStyled>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ticket: PropTypes.number.isRequired,
  yeld: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
};

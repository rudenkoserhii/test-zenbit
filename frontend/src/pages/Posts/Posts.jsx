import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../../components/PostList/PostList";
import { fetchPosts } from "../../redux/posts/operations";
import { selectLoading } from "../../redux/posts/selectors";
import MoonLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "calc((100vh - 150px) / 2) auto",
};

export default function Posts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <MoonLoader
          color={"#172133"}
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <PostList />
    </>
  );
}

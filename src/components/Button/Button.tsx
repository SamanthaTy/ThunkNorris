import { Button } from "semantic-ui-react";
import { getRandomJoke } from "../../store/reducer/jokeReducer";
import { useAppDispatch } from "../../store/redux-hooks";
import "./Button.scss";

function MainButton() {
  const dispatch = useAppDispatch();
   const handleClick = () => {
    dispatch(getRandomJoke());
  };

  return (
    <Button type='button' className='button' onClick={handleClick} primary fluid>
      New joke
    </Button>
  );
}

export default MainButton;

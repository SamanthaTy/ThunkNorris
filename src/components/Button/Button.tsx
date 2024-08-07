import { Button } from "semantic-ui-react";
import { getRandomJoke } from "../../store/reducer/jokeReducer";
import { useAppDispatch } from "../../store/redux-hooks";
import "./Button.scss";

function MainButton() {
  const dispatch = useAppDispatch();
  //Au click sur le bouton, dispatch une action pour récupérer une blague
  const handleClick = () => {
    dispatch(getRandomJoke());
  };

  return (
    <Button type='button' className='button' onClick={handleClick} primary fluid>
      Nouvelle blague
    </Button>
  );
}

export default MainButton;

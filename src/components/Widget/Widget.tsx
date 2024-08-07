import { useEffect } from "react";
import { getRandomJoke } from "../../store/reducer/jokeReducer";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import Button from "../Button/Button";
import "./Widget.scss";
import { Card, CardContent, CardDescription, Grid, GridColumn } from "semantic-ui-react";

function Widget() {
  const joke = useAppSelector((state) => state.joke);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRandomJoke());
  },[]);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <GridColumn style={{ maxWidth: 300 }}>
        <Card className="widget">
          <CardContent>
            <CardDescription className='widget-content' textAlign='center'>
              {joke}
            </CardDescription>     
          </CardContent>
          <CardContent>
              <Button />
          </CardContent>
        </Card>
      </GridColumn>
    </Grid>
  );
}

export default Widget;

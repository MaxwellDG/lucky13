import { useHistory } from "react-router-dom";

export const HomeButton = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/merch/checkout");
  }

  return (
    <button type="button" onClick={ handleClick }>
      Go home
    </button>
  );
}
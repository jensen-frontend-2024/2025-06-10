import { useState } from "react";

function Clicked() {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <button onClick={() => setClicked(true)}>Klicka mig!</button>
      {clicked && <p>Du klickade!</p>}
    </section>
  );
}

export default Clicked;
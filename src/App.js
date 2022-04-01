import { Container } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import { FavList } from "./components/list/FavList";
import { SearchForm } from "./components/searchForm/SearchForm";
import { Title } from "./components/Title";

function App() {
  const [favList, setFavList] = useState([]);

  const addToFavList = (name) => {
    setFavList([...favList, name]);
  };

  const removeFromFavList = (name) => {
    const tempList = favList.filter((robot) => robot !== name);
    setFavList(tempList);
  };

  return (
    <div className="wrapper">
      <Container>
        <Title className="title" />
        <SearchForm addToFavList={addToFavList} />
        <hr />
        <FavList favList={favList} removeFromFavList={removeFromFavList} />
      </Container>
    </div>
  );
}

export default App;

///1. remove the middle display
//2. remove the favorite list's repetition
//3. change the button to "remove from the list"

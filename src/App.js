import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function hideModalHandeler() {
    setIsModalVisible(false);
  }
  function showModalHandeler() {
    setIsModalVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandeler}></MainHeader>
      <main>
        <PostsList
          isModalVisible={isModalVisible}
          hideModalHandeler={hideModalHandeler}
        />
      </main>
    </>
  );
}

export default App;

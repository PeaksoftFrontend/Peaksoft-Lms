import { MeatballsList } from "./components/UI/MeatballsList";
import { menu } from "./utils/constants";

const App = () => {
  return (
    <div>
      <MeatballsList menu={menu} />
    </div>
  );
};

export default App;

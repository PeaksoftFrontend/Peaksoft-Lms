import { MeatballsList } from "./components/UI/MeatballsList";
import { menu } from "./utils/constants";

export const App = () => {
  return (
    <div>
      <MeatballsList menu={menu} />
    </div>
  );
};

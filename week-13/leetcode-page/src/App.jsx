import { FavouriteCard } from "./components/FavouriteCard";
import { FilterCard } from "./components/FilterCard";
import { QuestionsCard } from "./components/QuestionsCard";
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div className="flex bg-neutral-900 gap-14 font-font-awesome">
      <Sidebar />
      <FavouriteCard />
      <QuestionsCard />
      {/* <FilterCard /> */}
    </div>
  );
}

export default App
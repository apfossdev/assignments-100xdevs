import { FavouriteCard } from "./components/FavouriteCard";
import { FilterCard } from "./components/FilterCard";
import { QuestionsCard } from "./components/QuestionsCard";
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div className="flex flex-col md:flex-row bg-neutral-900 gap-14 font-font-awesome">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col md:flex-row">
        <FavouriteCard />
        <QuestionsCard />
      </div>
    </div>
  );
}

export default App
import AddTagsComponent from "./AddTagsComponent";
import Download from "./Download";
import Portfolio from "./Portfolio";

export default function MainComponent() {
  return (
    <div className="main-component-div">
      <AddTagsComponent />
      <Portfolio />
      <Download />
    </div>
  )
}

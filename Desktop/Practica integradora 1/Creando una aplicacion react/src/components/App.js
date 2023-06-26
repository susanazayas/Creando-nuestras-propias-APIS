import "../assets/css/app.css";
import { ContentWrapper } from "./ContentWrapper/ContentWrapper";
import { SideBar } from "./SiderBar/SideBar";

function App() {
      return (
            <div id="wrapper">
                  <SideBar />
                  <ContentWrapper />
            </div>
      );
}

export default App;

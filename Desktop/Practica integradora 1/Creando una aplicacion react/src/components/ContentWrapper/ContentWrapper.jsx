import { ContentRowTop } from "../ContentRowTop/ContentRowTop";
import { Details } from "../Details/Details";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";

export const ContentWrapper = () => {
      return (
            <>
                  {/* <!-- Content Wrapper --> */}
                  <div id="content-wrapper" className="d-flex flex-column">
                        {/* <!-- Main Content --> */}
                        <div id="content">
                              <TopBar />
                              <ContentRowTop />
                              <Details />
                        </div>
                        {/* <!-- End of MainContent --> */}
                        <Footer />
                  </div>
                  {/* <!-- End of Content Wrapper --> */}
            </>
      );
};

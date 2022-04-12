
import DHeader from "../DashboardComponents/DHeader";
import DSidebar from "../DashboardComponents/Sidebar/DSidebar";

const PageWrapper = ({children}) => {

    return (
        // flex colon
        <div>
            {/* Dashboard header */}
            <DHeader/>
            {/* Flex */}
            <div> 
                <DSidebar />
                {children}
            </div>
        </div>
    )
}

export default PageWrapper;
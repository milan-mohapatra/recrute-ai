import { useAuth } from "@clerk/clerk-react";
import LoadingPage from "@/routes/LoaderPage"
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({children}: {children: React.ReactNode}) => {
    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded) {
        return <LoadingPage />
    }

    if(!isSignedIn) {
        return <Navigate to={"/signin"} replace />
    }

  return children;
};

export default ProtectedRoutes;

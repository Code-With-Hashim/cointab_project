import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { UserDetails } from "./UserDetailPage"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
    )
}
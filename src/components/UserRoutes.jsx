import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import Loader from "./Loader/Loader";

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/goit-react-hw-08-phonebook" element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;
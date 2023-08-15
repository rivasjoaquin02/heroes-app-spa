import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/root";
import Marvel from "./routes/marvel/Marvel";
import Dc from "./routes/dc/Dc";
import HeroInfo, { loader as heroLoader } from "./components/HeroInfo";
import Search, { loader as searchLoader } from "./routes/search/Search";
import Login from "./routes/auth/login/Login";
import Register from "./routes/auth/register/Register";
import RequireAuth from "./components/RequireAuth";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<div>Index</div>} />
                <Route
                    path="marvel"
                    element={
                        <RequireAuth>
                            <Marvel />
                        </RequireAuth>
                    }
                />
                <Route
                    path="dc"
                    element={
                        <RequireAuth>
                            <Dc />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/hero/:heroId"
                    element={
                        <RequireAuth>
                            <HeroInfo />
                        </RequireAuth>
                    }
                    loader={heroLoader}
                />
                <Route
                    path="/search"
                    element={
                        <RequireAuth>
                            <Search />
                        </RequireAuth>
                    }
                    loader={searchLoader}
                />
            </Route>
            <Route element={<RootLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Route>
    )
);

export default AppRouter;

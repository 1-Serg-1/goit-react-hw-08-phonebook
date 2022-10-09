import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefreshing, selectUser, selectIsLoading } from "redux/auth/selectores"


export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
        isLoading: useSelector(selectIsLoading),
    };
};
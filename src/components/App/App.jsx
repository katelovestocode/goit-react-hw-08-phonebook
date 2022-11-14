import { Routes, Route } from "react-router-dom";
import { useEffect, lazy,  } from "react";
import { Layout } from "components/Layout";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from 'react-redux';
import { refreshUser } from "../../redux/auth/operations"
import { RestrictedRoute } from "../RestrictedRoute"
import { PrivateRoute } from "components/PrivateRoute";
import {Loader} from "../Loader/Loader"


const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {


  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (

    <div >       
      {isRefreshing ? <Loader/>  : ( 
      <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
      <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>} />           
      <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} /> }/>
      </Route>
      </Routes>)}
      </div>
  )
};





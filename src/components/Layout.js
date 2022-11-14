import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from './UserMenu/UserMenu.jsx';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Nav } from './App/App.styled.jsx';
import { NavLinkItem, Container } from '../components/App/App.styled';
import { Loader } from './Loader/Loader.jsx';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header>
        <Nav>
          <Container>
            <NavLinkItem to="/" key={'home'} end>
              Home
            </NavLinkItem>

            {isLoggedIn && (
              <NavLinkItem to={'contacts'} key={'contacts'}>
                Contacts
              </NavLinkItem>
            )}
          </Container>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

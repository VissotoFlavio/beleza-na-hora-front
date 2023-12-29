import React from 'react';

import { useAuth } from '../context/auth.context';
import WelcomeScreen from '../screens/Welcome';
import { AppRoutes } from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const authContext = useAuth();

  if (authContext.loading) {
    return <WelcomeScreen />;
  }

  if (authContext.signed) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;

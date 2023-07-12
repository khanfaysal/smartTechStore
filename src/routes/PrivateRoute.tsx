// import { useAppSelector } from '@/redux/hook';
// import { ReactNode } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// interface IProps {
//   children: ReactNode;
// }

// export default function PrivateRoute({ children }: IProps) {
//   const { user, isLoading } = useAppSelector((state) => state.user);

//   const { pathname } = useLocation();

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!user.email && !isLoading) {
//     return <Navigate to="/login" state={{ path: pathname }} />;
//   }

//   return children;
// }


// test

import { useAppSelector } from "@/redux/hook";
import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email && !isLoading && pathname === '/checkout') {
      navigate('/login', { state: { from: pathname } });
    }
  }, [user.email, isLoading, pathname, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user.email && pathname === '/checkout') {
    navigate('/login', { state: { from: pathname } });
    return null;
  }

  return children;
}






import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'redux/Auth/auth-selectors';
import { StatusForAll } from 'redux/Status';
import { selectUserStatus } from 'redux/User/user-selectors';

export default function PublicRoute() {
  const token = useSelector(getToken);
  const status = useSelector(selectUserStatus);

  if (status === StatusForAll.init || status === StatusForAll.loading) {
    return <p>Loading...</p>;
  }
  return token ? <Navigate to="/dairy" /> : <Outlet />;
}

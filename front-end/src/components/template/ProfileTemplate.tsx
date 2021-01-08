import React from 'react';

interface Props{
  title: string;
}

const ProfileTemplate: React.FC<Props> = ({ title }) => {
  return <>{title}</>;
}

export default ProfileTemplate;
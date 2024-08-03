import { useState, useEffect } from 'react';

type RoleData = {
  role: string;
};

const useGetRole = () => {
  const [role, setRole] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await fetch('/api/setRoles');
        if (!response.ok) {
          throw new Error('Failed to fetch role');
        }
        const data: RoleData = await response.json();
        setRole(data.role);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('Unknown error'));
        }
        console.error('Error fetching role:', error);
      }
    };

    fetchRole();
  }, []);

  return { role, error };
};

export default useGetRole;

import { Home, MessageCircle, User, Book } from 'lucide-react';
export const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MessageCircle className="h-4 w-4 text-white" />,
    },
  ];


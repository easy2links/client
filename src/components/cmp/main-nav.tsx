import * as React from 'react';

import { NavLink } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { Badge } from '@/src/components/ui/badge';

export default function MainNav({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <NavLink
        to="/controls"
        className={({ isActive }) =>
          isActive
            ? 'text-sm font-medium transition-colors hover:text-primary'
            : 'text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
        }
      >
        Panel
      </NavLink>
      <NavLink
        to="/devices"
        className={({ isActive }) =>
          isActive
            ? 'text-sm font-medium transition-colors hover:text-primary flex justify-center items-center'
            : 'text-sm font-medium transition-colors hover:text-primary flex justify-center items-center text-muted-foreground'
        }
      >
        <span>Devices</span>
        <Badge className="ml-1" variant="secondary">
          0
        </Badge>
      </NavLink>
      <NavLink
        to="/adapters"
        className={({ isActive }) =>
          isActive
            ? 'text-sm font-medium transition-colors hover:text-primary'
            : 'text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
        }
      >
        Adapters
      </NavLink>
      <NavLink
        to="/logs"
        className={({ isActive }) =>
          isActive
            ? 'text-sm font-medium transition-colors hover:text-primary'
            : 'text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
        }
      >
        Logs
      </NavLink>
    </nav>
  );
}

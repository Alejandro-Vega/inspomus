import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CollectionsIcon from '@mui/icons-material/Collections';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { lazy, Suspense } from 'react';

const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <Suspense fallback="Loading...">
      <Component {...props} />
    </Suspense>
  );
};

const Landing = Loadable(lazy(() => import('app/pages/landing/Landing')));
const Normal = Loadable(lazy(() => import('app/pages/prompt/normal/Normal')));
const NormalStart = Loadable(lazy(() => import('app/pages/prompt/normal/NormalStart')));
const Prompt = Loadable(lazy(() => import('app/pages/prompt/Prompt')));
const Goals = Loadable(lazy(() => import('app/pages/goals/Goals')));
const Gallery = Loadable(lazy(() => import('app/pages/gallery/Gallery')));
const Community = Loadable(lazy(() => import('app/pages/community/Community')));
const Settings = Loadable(lazy(() => import('app/pages/settings/Settings')));

export type TPath = {
  root: string;
  icon?: JSX.Element;
  element?: JSX.Element;
  label?: string;
  children?: {
    [key: string]: Omit<TPath, 'icon'>;
  };
};

export interface IPaths {
  home: {
    root: string;
    icon: JSX.Element;
    element: JSX.Element;
  };
  prompt: {
    root: string;
    icon: JSX.Element;
    element: JSX.Element;
    children: {
      quickStart: {
        root: string;
        label: string;
        element: JSX.Element;
      };
      normal: {
        root: string;
        label: string;
        element: JSX.Element;
        children: {
          start: {
            root: string;
            label: string;
            element: JSX.Element;
          };
        };
      };
      timed: {
        root: string;
        label: string;
        element: JSX.Element;
      };
      story: {
        root: string;
        label: string;
        element: JSX.Element;
      };
    };
  };
  goals: {
    root: string;
    icon: JSX.Element;
    element: JSX.Element;
  };
  gallery: {
    root: string;
    icon: JSX.Element;
    element: JSX.Element;
  };
  community: {
    root: string;
    icon: JSX.Element;
    element: JSX.Element;
  };
  settings: {
    root: string;
    icon: JSX.Element;
    element: JSX.Element;
  };
}

export interface IServicePaths {
  logo: JSX.Element;
  paths: IPaths;
}

export const ServicePaths: IServicePaths = {
  logo: <LogoDevIcon fontSize="large" />,
  paths: {
    home: {
      root: '/',
      icon: <HomeIcon fontSize="large" />,
      element: <Landing />,
    },
    prompt: {
      root: '/prompt',
      icon: <CreateIcon fontSize="large" />,
      element: <Prompt />,
      children: {
        quickStart: {
          root: '/prompt/quick-start',
          label: 'Quick Start',
          element: <Normal />,
        },
        normal: {
          root: '/prompt/normal',
          label: 'Normal',
          element: <Normal />,
          children: {
            start: {
              root: '/prompt/normal/start',
              label: 'Start',
              element: <NormalStart />,
            },
          },
        },
        timed: {
          root: '/prompt/timed',
          label: 'Timed',
          element: <Normal />,
        },
        story: {
          root: '/prompt/story',
          label: 'Story',
          element: <Normal />,
        },
      },
    },
    goals: {
      root: '/goals',
      icon: <BeenhereIcon fontSize="large" />,
      element: <Goals />,
    },
    gallery: {
      root: '/gallery',
      icon: <CollectionsIcon fontSize="large" />,
      element: <Gallery />,
    },
    community: {
      root: '/community',
      icon: <Diversity1Icon fontSize="large" />,
      element: <Community />,
    },
    settings: {
      root: '/settings',
      icon: <SettingsIcon fontSize="large" />,
      element: <Settings />,
    },
  },
};

export const omitPath = (path: keyof IPaths): Partial<IPaths> => {
  const { [path]: omitted, ...rest } = ServicePaths.paths;
  return rest;
};

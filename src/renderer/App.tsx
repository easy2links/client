import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import SceneSwitcher from '@/src/components/cmp/scene-switcher';
import MainNav from '@/src/components/cmp/main-nav';
import ControlPanel from '@/src/renderer/pages/control-panel';
import NoneSelected from '@/src/renderer/pages/none-selected';
import Devices from '@/src/renderer/pages/devices';
import Adapters from '@/src/renderer/pages/adapters';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <SceneSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search />
              <UserNav /> */}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Routes>
            <Route path="/none" element={<NoneSelected />} />
            <Route index path="/controls" element={<ControlPanel />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/adapters" element={<Adapters />} />
            <Route path="/logs" element={<ControlPanel />} />
            <Route path="*" element={<Navigate to="/none" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

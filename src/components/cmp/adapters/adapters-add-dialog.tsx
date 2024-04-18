import { ReactNode, useState } from 'react';
import InputCodeButton from '@/src/components/cmp/input-code-button';
import { Button } from '@/src/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';

import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { AdapterType } from '@/src/components/cmp/adapters/adapters-table';

interface AdaptersAddDialogProps {
  children: ReactNode;
  onSet: (formData: AdapterType) => void;
}

export default function AdaptersAddDialog({
  children,
  onSet,
}: AdaptersAddDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    adapterName: '',
    driverPath: '',
    driverConfig: '',
    script: '',
  });

  const handleSet = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add an adapter</DialogTitle>
          <DialogDescription>
            The adapter is responsible for processing input signals and
            outputting data after processing.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="adapterName" className="text-right">
              Adapter Name
            </Label>
            <Input
              id="adapterName"
              value={formData.adapterName}
              className="col-span-3"
              placeholder="e.g. COM3 Adapter"
              onChange={(e) => {
                handleSet('adapterName', e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="driverPath" className="text-right">
              Driver Path
            </Label>
            <Input
              id="driverPath"
              value={formData.driverPath}
              className="col-span-2"
              placeholder="Supports *. js and package names"
              onChange={(e) => {
                handleSet('driverPath', e.target.value);
              }}
            />
            <InputCodeButton
              id="driverConfig"
              value={formData.driverConfig}
              variant="outline"
              className="col-span-1"
              title="Driver configuration parameters"
              description="Please use JSON format to set driver configuration parameters."
              lang="json"
              onSet={(code) => {
                handleSet('driverConfig', code);
              }}
            >
              Set parameters
            </InputCodeButton>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="driverPackage" className="text-right">
              Scirpt
            </Label>
            <InputCodeButton
              id="script"
              value={formData.script}
              variant="outline"
              className="col-span-1"
              title="Signal processing script"
              lang="javascript"
              description="Only supports JavaScript and ensures the inclusion of an entry function called processData."
              onSet={(code) => {
                handleSet('script', code);
              }}
            >
              Set script
            </InputCodeButton>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              setOpen(false);
              onSet(formData);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

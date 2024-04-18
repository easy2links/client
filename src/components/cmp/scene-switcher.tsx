'use client';

import * as React from 'react';
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
  EnterIcon,
} from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/src/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/src/components/ui/command';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/src/components/ui/select';

const scenes = [
  {
    label: 'Rural Environmental Monitoring System',
    value: 'zigBee',
  },
];

type Scene = (typeof scenes)[number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface SceneSwitcherProps extends PopoverTriggerProps {}

export default function SceneSwitcher({ className }: SceneSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState<Scene>(scenes[0]);

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a scene"
            className={cn('min-w-[400px] justify-between', className)}
          >
            {selectedTeam.label}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search..." />
              <CommandEmpty>Not found</CommandEmpty>
              <CommandGroup>
                {scenes.map((scene) => (
                  <CommandItem
                    key={scene.value}
                    onSelect={() => {
                      setSelectedTeam(scene);
                      setOpen(false);
                    }}
                    className="text-sm m-1.5"
                  >
                    {scene.label}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        selectedTeam.value === scene.value
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewTeamDialog(true);
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    Create a scene
                  </CommandItem>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                    }}
                  >
                    <EnterIcon className="mr-2 h-4 w-4" />
                    Import
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a scene</DialogTitle>
          <DialogDescription>
            Add a scene for device management
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Scece name</Label>
              <Input
                id="name"
                placeholder="Please summarize the content of the IoT as the scene name"
              />
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{' '}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{' '}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

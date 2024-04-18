import AdaptersAddDialog from '@/src/components/cmp/adapters/adapters-add-dialog';
import AdaptersTable, {
  AdapterType,
} from '@/src/components/cmp/adapters/adapters-table';
import { Button } from '@/src/components/ui/button';

const data: AdapterType[] = [
  {
    id: '728ed52f',
    adapterName: 'COM3 adapter',
    driverPath: '@easy2links/serialport',
  },
];

export default function Adapters() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Adapters</h2>
        <div className="flex items-center space-x-2">
          <AdaptersAddDialog onSet={(form) => console.log(form)}>
            <Button>Add an Adapter</Button>
          </AdaptersAddDialog>
        </div>
      </div>

      <div className="space-y-4">
        <AdaptersTable data={data} />
      </div>
    </>
  );
}

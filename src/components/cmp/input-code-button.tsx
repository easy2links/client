import React, { ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { githubLight } from '@uiw/codemirror-theme-github';

import { Button, ButtonProps } from '@/src/components/ui/button';

interface InputCodeButtonProps extends ButtonProps {
  value?: string;
  children: ReactNode;
  title: string;
  description?: string;
  lang?: 'json' | 'javascript';
  onSet: (code: string) => void;
}

function InputCodeButton({
  value,
  children,
  title,
  description,
  className,
  lang,
  onSet,
  ...props
}: InputCodeButtonProps) {
  const [code, setCode] = React.useState(value == null ? '' : value);
  const [open, setOpen] = React.useState(false);
  const onChange = React.useCallback((val: string) => {
    setCode(val);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} {...props}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        <CodeMirror
          value={code}
          height="400px"
          extensions={[lang === 'javascript' ? javascript() : json()]}
          onChange={onChange}
          theme={githubLight}
        />
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              onSet(code);
              setOpen(false);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

InputCodeButton.defaultProps = {
  value: null,
  description: null,
  lang: 'json',
};

export default InputCodeButton;

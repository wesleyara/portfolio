import { Dialog } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ open, children, setIsOpen }: ModalProps) => {
  return (
    <Dialog open={open} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <div className="modal">
          <button className="esc" onClick={() => setIsOpen(false)}>
            x
          </button>
          <div className="content">{children}</div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

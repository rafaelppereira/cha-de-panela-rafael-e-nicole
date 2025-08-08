import { useEffect, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useLocation, useNavigate } from "react-router-dom";

interface DialogConfirmProps {
  children: ReactNode
}

export function DialogConfirm({ children }: DialogConfirmProps) {
  const { hash } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (hash === '#confirmar-presenca') {
      setOpen(true)
    }
  }, [hash])

  return (
    <Dialog open={open}  onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          navigate("/");
        }
      }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar presença</DialogTitle>
          <DialogDescription>Preencha as informações abaixo para confirmar a presença no chá de casa nova.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
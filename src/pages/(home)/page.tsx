import { Counter } from "@/components/counter";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  CheckCheckIcon,
  CopyIcon,
  CopyrightIcon,
  InstagramIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

import { CopyToClipboard } from "react-copy-to-clipboard";

import settings from "../../../settings.json";
import { format } from "date-fns";
import { toast } from "sonner";
import { useEffect, useRef } from "react";
import { DialogConfirm } from "@/components/dialog-confirm";

export function Home() {
  const { hash } = useLocation()

  const refDetails: any = useRef()
  const refLocal: any = useRef()

  useEffect(() => {
    if (hash === '') {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }

    if (hash === '#detalhes-da-festa') {
      window.scroll({
        top: refDetails.current.offsetTop - 80,
        behavior: 'smooth'
      })
    }

    if (hash === '#local-da-festa') {
      window.scroll({
        top: refLocal.current.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }, [hash])

  return (
    <main>
      <Helmet title="Você foi convidado" />

      <Header />

      <section className="bg-banner overflow-hidden relative mt-16 lg:mt-20 flex h-[30rem] lg:h-[40rem] flex-col items-center justify-center bg-center">
        <img
          src="/detail-left.svg"
          alt="Detalhe da esquerda"
          className="absolute bottom-0 left-0"
        />
        <img
          src="/detail-right.svg"
          alt="Detalhe da direita"
          className="absolute -right-20 top-0 hidden lg:block"
        />

        <div className="flex mb-20 lg:mb-0 select-none px-8 flex-col items-center text-center">
          <h2 className="mt-8 font-corinthia text-6xl lg:text-8xl font-extrabold text-[#baaa9e]">
            Rafael e Nicole
          </h2>
          <p className="mt-5 max-w-sm lg:max-w-lg text-md lg:text-lg font-medium text-zinc-500">
            Você foi convidado para fazer parte dessa grande festa e comemorar
            conosco a nossa nova fase de vida.
          </p>

          <span className="font-questrial mt-10 block text-2xl lg:text-3xl font-medium text-zinc-500">
            {format(
              new Date(settings.date + "T03:00:00"),
              "dd '.' MM '.' yyyy",
            )}{" "}
            às {settings.hour}
          </span>
        </div>

        <DialogConfirm>
          <Button
            variant="outline"
            title="Clique para confirmar a presença"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full"
          >
            <CheckCheckIcon className="mr-2 size-4" />
            Confirmar presença
          </Button>
        </DialogConfirm>
      </section>

      <section className="bg-[#a09389]">
        <div className="container flex select-none flex-col items-center py-20">
          <h2 className="font-corinthia text-5xl lg:text-7xl text-white">
            Contagem regressiva
          </h2>
          <p className="mt-3 max-w-sm text-center text-md lg:text-lg text-white">
            Estamos contando cada segundo para ter essa festa incrível com sua
            presença.
          </p>

          <div className="mt-10">
            <Counter />
          </div>
        </div>
      </section>

      <section ref={refDetails} className="border-b bg-zinc-50">
        <div className="container py-14">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="h-px hidden lg:block w-full flex-1 bg-[#a09389]/20" />

            <h2 className="select-none font-corinthia text-5xl lg:text-6xl text-[#baaa9e]">
              Detalhes da festa
            </h2>
            <div className="h-px w-full flex-1 bg-[#a09389]/20" />
          </div>

          {settings.details.map((detail, i) => {
            return (
              <div key={i} className="mt-10 flex flex-col lg:flex-row items-start gap-10">
                <div className="lg:flex hidden size-12 items-center justify-center rounded-full bg-[#a09389]/10 text-lg font-semibold text-[#a09389]">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-2xl text-balance font-semibold text-zinc-500">
                    {detail.title}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-zinc-500">
                    {detail.description}
                  </p>

                  {detail.links &&
                    detail.links.map((link, i) => {
                      return (
                        <Button
                          key={i}
                          variant="outline"
                          asChild
                          className="mt-7"
                        >
                          <Link to={link.href} target="_blank">
                            <InstagramIcon className="mr-2 size-4" />
                            {link.title}
                          </Link>
                        </Button>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section ref={refLocal}>
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-10 py-14">
          <div className="flex-[1.5] w-full">
            <div className="overflow-hidden rounded-md border-2">
              <iframe
                width="100%"
                loading="lazy"
                className="h-[250px] lg:h-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28307.329484441223!2d-48.664110743929115!3d-27.51852648261512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274c47c10c6dc9%3A0xe80061edd913e7d9!2sS%C3%ADtio%20Chico%20Bento!5e0!3m2!1spt-BR!2sbr!4v1754628116524!5m2!1spt-BR!2sbr"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="font-corinthia text-5xl lg:text-6xl text-[#baaa9e]">
              Local da festa
            </h2>

            <p className="mt-2 text-md lg:text-lg font-medium text-zinc-500">
              A nossa festa de casa nova será realizada no Sitio Chico Bento nos
              fundos de Biguaçu, para facilitar a ida e volta de todos os
              convidados.
              <br />
              <br />
              R. Bertoldo Simão de Oliveira, 2645 - Fundos, Biguaçu - SC, CEP
              88160-000
            </p>

            <CopyToClipboard
              text="Bertoldo Simão de Oliveira, 2645"
              onCopy={() => toast.success("Endereço copiado com sucesso")}
            >
              <Button
                type="button"
                title="Clique para copiar o endereço completo"
                className="mt-6 w-full bg-[#a09389] font-semibold text-white transition-all hover:bg-[#baaa9e] hover:brightness-90"
              >
                <CopyIcon className="mr-2 size-4" />
                Copiar endereço completo
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </section>

      <footer className="pointer-events-none flex select-none items-center justify-center bg-[#a09389] py-2 text-xs lg:text-sm text-white">
        <CopyrightIcon className="mr-1 size-3" /> {new Date().getFullYear()} |
        Todos os direito reservados - criado por Rafael Pereira
      </footer>
    </main>
  );
}

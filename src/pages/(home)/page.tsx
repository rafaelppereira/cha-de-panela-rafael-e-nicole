import { Counter } from "@/components/counter";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  CheckCheckIcon,
  CopyIcon,
  CopyrightIcon,
  HeartHandshakeIcon,
  InstagramIcon,
  Link2Icon,
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
  const { hash } = useLocation();

  const refDetails: any = useRef();
  const refLocal: any = useRef();
  const refGifts: any = useRef();

  useEffect(() => {
    if (hash === "") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }

    // if (hash === "#detalhes-da-festa") {
    //   window.scroll({
    //     top: refDetails.current.offsetTop - 80,
    //     behavior: "smooth",
    //   });
    // }

    if (hash === "#lista-de-presentes") {
      window.scroll({
        top: refGifts.current.offsetTop - 80,
        behavior: "smooth",
      });
    }

    if (hash === "#local-da-festa") {
      window.scroll({
        top: refLocal.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }, [hash]);

  return (
    <main>
      <Helmet title="Você foi convidado" />

      <Header />

      <section className="relative mt-16 flex h-[30rem] flex-col items-center justify-center overflow-hidden bg-banner bg-center lg:mt-20 lg:h-[40rem]">
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

        <div className="mb-20 flex select-none flex-col items-center px-8 text-center lg:mb-0">
          <h2 className="mt-8 font-corinthia text-6xl font-extrabold text-[#baaa9e] lg:text-8xl">
            Rafael e Nicole
          </h2>
          <p className="text-md mt-5 max-w-sm font-medium text-zinc-500 lg:max-w-lg lg:text-lg">
            Você foi convidado para fazer parte dessa grande festa e comemorar
            conosco a nossa nova fase de vida.
          </p>

          <span className="mt-10 block font-questrial text-2xl font-medium text-zinc-500 lg:text-3xl">
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
          <h2 className="font-corinthia text-5xl text-white lg:text-7xl">
            Contagem regressiva
          </h2>
          <p className="text-md mt-3 max-w-sm text-center text-white lg:text-lg">
            Estamos contando cada segundo para ter essa festa incrível com sua
            presença.
          </p>

          <div className="mt-10">
            <Counter />
          </div>
        </div>
      </section>

      <section ref={refDetails} className="bg-zinc-50">
        <div className="container py-14">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="hidden h-px w-full flex-1 bg-[#a09389]/20 lg:block" />

            <h2 className="select-none font-corinthia text-5xl text-[#baaa9e] lg:text-6xl">
              Detalhes da festa
            </h2>
            <div className="h-px w-full flex-1 bg-[#a09389]/20" />
          </div>

          {settings.details.map((detail, i) => {
            return (
              <div
                key={i}
                className="mt-10 flex flex-col items-start gap-10 lg:flex-row"
              >
                <div className="hidden size-12 items-center justify-center rounded-full bg-[#a09389]/10 text-lg font-semibold text-[#a09389] lg:flex">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-balance text-lg font-semibold text-zinc-500 lg:text-2xl">
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

      <section ref={refGifts} className="border-b bg-zinc-50">
        <div className="container py-14">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="hidden h-px w-full flex-1 bg-[#a09389]/20 lg:block" />

            <h2 className="select-none font-corinthia text-5xl text-[#baaa9e] lg:text-6xl">
              Lista de presentes
            </h2>
            <div className="h-px w-full flex-1 bg-[#a09389]/20" />
          </div>

          <div className="flex lg:justify-center">
            <p className="text-md mt-3 max-w-md text-zinc-500 lg:text-center lg:text-lg">
              Abaixo temos as listas de presentes que montamos em várias lojas
              diferentes, ajude somente se você puder! só sua presença já é mais
              que especial.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {settings.lists.map((list, i) => {
              return (
                <div key={i} className="rounded-md border bg-white p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-600">
                      <HeartHandshakeIcon className="size-4" />
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-600">
                      {list.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600">
                    Preparamos uma seleção especial de presentes na {list.title}{" "}
                    para tornar seu momento ainda mais especial. Confira a lista
                    completa.
                  </p>

                  <Button
                    asChild
                    type="button"
                    variant="outline"
                    className="mt-5 w-full"
                    title="Clique para acessar a lista"
                  >
                    <Link to={list.href} target="_blank">
                      <Link2Icon className="mr-2 size-4" />
                      Acessar lista
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 md:gap-10 md:flex-row">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-zinc-500">
                Prefere de outra maneira?
              </h2>
              <p className="mt-5 font-medium text-zinc-500">
                Se preferir não escolher um presente da lista e optar por
                contribuir em dinheiro, disponibilizamos o QR Code ao lado para
                que você faça o valor que desejar. E lembre-se: se não puder
                contribuir, sua presença já será o nosso maior presente!
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-md border bg-white p-2 text-sm">
                <CopyToClipboard text="cbdc8f29-9ff1-47e4-9819-11e922758985" onCopy={() => toast.success('PIX copiado com sucesso')}>
                  <Button
                    size="icon"
                    title="Clique para copiar o pix"
                    className="bg-[#a09389] text-white transition-all hover:bg-[#baaa9e] hover:brightness-90"
                  >
                    <CopyIcon className="size-4" />
                  </Button>
                </CopyToClipboard>

                <h2>cbdc8f29-9ff1-47e4-9819-11e922758985</h2>
              </div>
            </div>
            <div className="w-full md:w-auto flex justify-start">
              <img src="/pix.jpeg" alt="Imagem do PIX" className="w-full md:w-[250px]" />
            </div>
          </div>
        </div>
      </section>

      <section ref={refLocal}>
        <div className="container flex flex-col-reverse items-center gap-10 py-14 lg:flex-row">
          <div className="w-full flex-[1.5]">
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
            <h2 className="font-corinthia text-5xl text-[#baaa9e] lg:text-6xl">
              Local da festa
            </h2>

            <p className="text-md mt-2 font-medium text-zinc-500 lg:text-lg">
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

      <footer className="pointer-events-none flex select-none items-center justify-center bg-[#a09389] py-2 text-xs text-white lg:text-sm">
        <CopyrightIcon className="mr-1 size-3" /> {new Date().getFullYear()} |
        Direitos reservados - criado por Rafael Pereira
      </footer>
    </main>
  );
}

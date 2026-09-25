"use client";

import {
  Bird,
  Cat,
  Check,
  Dog,
  Fish,
  Mail,
  PawPrint,
  Rabbit,
} from "lucide-react";
import { FormEvent, useState } from "react";

import Container from "@/components/ui/Container";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF8F5] py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="relative mx-auto max-w-5xl">

          {/* =========================
              TOP PET ICONS
          ========================== */}

          {/* Cat */}
          <div className="absolute -top-5 left-[7%] z-20 hidden rotate-[-9deg] sm:block">
            <PetIcon
              icon={Cat}
              borderColor="border-[#FF72A0]"
              bgColor="bg-[#FFF0F5]"
              textColor="text-[#FF72A0]"
            />
          </div>

          {/* Dog */}
          <div className="absolute -top-9 left-[22%] z-20 hidden rotate-[6deg] sm:block">
            <PetIcon
              icon={Dog}
              borderColor="border-[#FF7043]"
              bgColor="bg-[#FFF1EB]"
              textColor="text-[#FF7043]"
            />
          </div>

          {/* Bird */}
          <div className="absolute -top-6 right-[22%] z-20 hidden rotate-[-7deg] sm:block">
            <PetIcon
              icon={Bird}
              borderColor="border-[#F5C542]"
              bgColor="bg-[#FFF9DF]"
              textColor="text-[#D9A900]"
            />
          </div>

          {/* Rabbit */}
          <div className="absolute -top-10 right-[7%] z-20 hidden rotate-[9deg] sm:block">
            <PetIcon
              icon={Rabbit}
              borderColor="border-[#20C4B8]"
              bgColor="bg-[#E8FBF9]"
              textColor="text-[#20A99F]"
            />
          </div>

          {/* =========================
              MAIN CTA
          ========================== */}

          <div className="relative overflow-hidden rounded-[32px] border border-[#F5D8CF] bg-[#FFF1EB] px-5 py-12 shadow-sm sm:px-10 sm:py-14 lg:px-16">

            {/* Decorative Circle - Left */}
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-24 h-52 w-52 rounded-full border border-[#20C4B8]/20"
            />

            {/* Decorative Circle - Right */}
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -right-24 h-56 w-56 rounded-full border border-[#FF7043]/25"
            />

            {/* Inner Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#19324D]/10"
            />

            {/* Yellow Dot */}
            <span
              aria-hidden="true"
              className="absolute left-[16%] top-[24%] h-3 w-3 rounded-full bg-[#F5C542]"
            />

            {/* Pink Dot */}
            <span
              aria-hidden="true"
              className="absolute right-[17%] bottom-[26%] h-3 w-3 rounded-full bg-[#FF72A0]"
            />

            {/* Orange Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-[#FF7043]/10"
            />

            {/* Teal Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 left-8 h-20 w-20 rounded-full bg-[#20C4B8]/10"
            />

            {/* Fish */}
            <Fish
              aria-hidden="true"
              className="absolute bottom-8 left-7 hidden h-8 w-8 rotate-[-12deg] text-[#20A99F] sm:block"
              strokeWidth={1.3}
            />

            {/* Paw */}
            <PawPrint
              aria-hidden="true"
              className="absolute bottom-8 right-8 hidden h-8 w-8 rotate-12 text-[#FF72A0] sm:block"
              strokeWidth={1.3}
            />

            {/* =========================
                CONTENT
            ========================== */}

            <div className="relative z-10 mx-auto max-w-2xl text-center">

              {/* Eyebrow */}
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#20A99F]">
                Stay Connected
              </p>

              {/* Heading */}
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#19324D] sm:text-4xl lg:text-5xl">
                Newsletter{" "}
                <span className="text-[#FF7043]">Signup</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#5F7185] sm:text-base">
                Get cute pet tips, helpful updates and special offers
                straight to your inbox.
              </p>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-6 flex max-w-xl flex-col gap-2 rounded-full border border-[#F0DDD7] bg-white p-1.5 sm:flex-row"
              >
                {/* Email */}
                <div className="flex min-w-0 flex-1 items-center">
                  <Mail
                    className="ml-3 h-4 w-4 shrink-0 text-[#20C4B8]"
                    strokeWidth={1.7}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                    className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-[#19324D] outline-none placeholder:text-[#9AA8B5]"
                  />
                </div>

                {/* Subscribe */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7043] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#F45F32]"
                >
                  {subscribed ? (
                    <>
                      <Check
                        className="h-4 w-4"
                        strokeWidth={2}
                      />
                      Subscribed
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>

              {/* Success */}
              {subscribed && (
                <p className="mt-3 text-xs text-[#20A99F]">
                  You're now part of our pet-loving family.
                </p>
              )}

              {/* Bottom Decoration */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-[#19324D]/15 sm:w-14" />

                <PawPrint
                  className="h-4 w-4 text-[#D9A900]"
                  strokeWidth={1.4}
                />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#5F7185]">
                  Love • Care • Companionship
                </span>

                <div className="h-px w-10 bg-[#19324D]/15 sm:w-14" />
              </div>
            </div>
          </div>

          {/* =========================
              MOBILE PET ICONS
          ========================== */}

          <div className="mt-4 flex items-center justify-center gap-5 sm:hidden">
            <Cat
              className="h-5 w-5 -rotate-6 text-[#FF72A0]"
              strokeWidth={1.4}
            />

            <Dog
              className="h-5 w-5 rotate-6 text-[#FF7043]"
              strokeWidth={1.4}
            />

            <Bird
              className="h-5 w-5 -rotate-6 text-[#D9A900]"
              strokeWidth={1.4}
            />

            <Rabbit
              className="h-5 w-5 rotate-6 text-[#20A99F]"
              strokeWidth={1.4}
            />

            <Fish
              className="h-5 w-5 -rotate-6 text-[#20A99F]"
              strokeWidth={1.4}
            />

            <PawPrint
              className="h-5 w-5 rotate-6 text-[#FF72A0]"
              strokeWidth={1.4}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   PET ICON
========================= */

function PetIcon({
  icon: Icon,
  borderColor,
  bgColor,
  textColor,
}: {
  icon: React.ElementType;
  borderColor: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-[22px] border-4 ${borderColor} ${bgColor} ${textColor} shadow-sm lg:h-[72px] lg:w-[72px]`}
    >
      <Icon
        className="h-8 w-8 lg:h-9 lg:w-9"
        strokeWidth={1.4}
      />
    </div>
  );
}
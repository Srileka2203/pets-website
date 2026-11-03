"use client";

import { FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend/API submission will be added later.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        space-y-6
        rounded-[28px]
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        sm:p-8
        lg:p-10
      `}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className={`
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-3
              text-sm
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-gray-500
              focus:bg-white
            `}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className={`
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-3
              text-sm
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-gray-500
              focus:bg-white
            `}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className={`
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-3
              text-sm
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-gray-500
              focus:bg-white
            `}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            required
            className={`
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-3
              text-sm
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-gray-500
              focus:bg-white
            `}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-gray-900"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us how we can help..."
          required
          className={`
            w-full
            resize-none
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-4
            py-3
            text-sm
            text-gray-900
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-gray-500
            focus:bg-white
          `}
        />
      </div>

      <div className="pt-2">
        <Button type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
}
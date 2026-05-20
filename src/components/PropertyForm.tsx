"use client";

import { useState, type FormEvent } from "react";
import { PROPERTY_TYPES } from "@/lib/constants";
import { useIntent } from "@/context/IntentContext";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORM_COPY = {
  sell: {
    title: "Combien Vaut Votre Propriété",
    submit: "Vendre ma propriété",
    showAddress: true,
    showBudget: false,
    areaLabel: null as string | null,
  },
  buy: {
    title: "Décrivez Votre Projet D'achat",
    submit: "Acheter avec nous",
    showAddress: false,
    showBudget: true,
    areaLabel: "Quartier ou secteur recherché",
  },
} as const;

export function PropertyForm() {
  const { intent } = useIntent();
  const copy = FORM_COPY[intent];
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="dmform-red" id="contact-form" role="status">
        <div className="px-6 py-12 text-center sm:px-10">
          <p className="text-xl font-normal text-white">
            Merci de nous avoir contactés.
          </p>
          <p className="mt-4 text-base font-normal text-white/90">
            Nous vous répondrons dans les plus brefs délais.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="dmform-red-submit mt-10 cursor-pointer"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      key={intent}
      id="contact-form"
      className="dmform-red dmform-red-layout"
      data-layout="layout-3"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="intent" value={intent} />

      <h3 className="dmform-red-title font-pp">{copy.title}</h3>

      {status === "error" && (
        <div className="dmform-red-error" role="alert">
          <p>
            Oups, une erreur s&apos;est produite lors de l&apos;envoi de votre
            message.
          </p>
          <p className="mt-2 opacity-90">Veuillez réessayer plus tard.</p>
        </div>
      )}

      <div className="dmform-red-grid">
        {copy.showAddress && (
          <DmField
            className="dmform-red-full"
            label="Adresse de votre propriété"
            name="address"
            required
          />
        )}
        {copy.areaLabel && (
          <DmField
            className="dmform-red-full"
            label={copy.areaLabel}
            name="area"
            required
          />
        )}
        <DmField label="Nom complet" name="name" required />
        <DmField label="Téléphone" name="phone" type="tel" required />
        <DmField label="Courriel" name="email" type="email" required />

        <div className="dmform-red-field">
          <label htmlFor="propertyType">Type de propriété</label>
          <select id="propertyType" name="propertyType" defaultValue="" required>
            <option value="" disabled hidden />
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {copy.showBudget && (
          <DmField label="Budget approximatif" name="budget" />
        )}

        <div className="dmform-red-field dmform-red-full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={3} />
        </div>
      </div>

      <div className="dmform-red-actions">
        <button
          type="submit"
          className="dmform-red-submit font-pp cursor-pointer disabled:opacity-60"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Envoi en cours..." : copy.submit}
        </button>
      </div>
    </form>
  );
}

function DmField({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  const id = name;
  return (
    <div className={`dmform-red-field ${className}`}>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      <input id={id} name={name} type={type} required={required} />
    </div>
  );
}

"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  Phone,
  User,
  Building2,
  FileText,
} from "lucide-react"

export function SupportForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("submitting")

    const subject = encodeURIComponent(
      `Support Query from ${formData.name} - ${formData.company || "N/A"}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nSupport Required:\n${formData.message}`
    )
    window.location.href = `mailto:support@automaly.io?subject=${subject}&body=${body}`

    setTimeout(() => {
      setFormState("success")
      setFormData({ name: "", phone: "", email: "", company: "", message: "" })
    }, 500)
  }

  if (formState === "success") {
    return (
      <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-brand-lavender p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple/10">
          <CheckCircle2 className="h-7 w-7 text-brand-purple" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          Query Submitted
        </h3>
        <p className="max-w-sm text-sm text-foreground/60">
          Your email client should have opened with the details pre-filled. If
          not, you can email us directly at{" "}
          <a
            href="mailto:support@automaly.io"
            className="font-medium text-brand-purple hover:underline"
          >
            support@automaly.io
          </a>
        </p>
        <Button
          variant="outline"
          className="mt-2 border-brand-purple/30 text-brand-purple font-semibold hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-200"
          onClick={() => setFormState("idle")}
        >
          Submit Another Query
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="flex items-center gap-1.5 text-foreground/80"
          >
            <User className="h-3.5 w-3.5 text-brand-purple/60" />
            Full Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="border-border/60 bg-brand-lavender/30 focus-visible:ring-brand-purple/30"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="flex items-center gap-1.5 text-foreground/80"
          >
            <Phone className="h-3.5 w-3.5 text-brand-purple/60" />
            Phone
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="border-border/60 bg-brand-lavender/30 focus-visible:ring-brand-purple/30"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="flex items-center gap-1.5 text-foreground/80"
          >
            <Mail className="h-3.5 w-3.5 text-brand-purple/60" />
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="border-border/60 bg-brand-lavender/30 focus-visible:ring-brand-purple/30"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="company"
            className="flex items-center gap-1.5 text-foreground/80"
          >
            <Building2 className="h-3.5 w-3.5 text-brand-purple/60" />
            Company
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="border-border/60 bg-brand-lavender/30 focus-visible:ring-brand-purple/30"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="flex items-center gap-1.5 text-foreground/80"
        >
          <FileText className="h-3.5 w-3.5 text-brand-purple/60" />
          Support required
          <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your support query, the system or process involved, and any relevant details..."
          className="resize-y border-border/60 bg-brand-lavender/30 focus-visible:ring-brand-purple/30"
        />
      </div>

      <p className="text-xs text-foreground/70">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-brand-purple/80 hover:text-brand-purple"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-brand-purple/80 hover:text-brand-purple"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>

      <Button
        type="submit"
        size="lg"
        disabled={formState === "submitting"}
        variant="orange" className="w-full gap-2 sm:w-auto"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit
          </>
        )}
      </Button>
    </form>
  )
}

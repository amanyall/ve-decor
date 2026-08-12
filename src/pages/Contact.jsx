import { useState } from "react";
import Button from "../components/Button.jsx";
import OfficeInfo from "../components/OfficeInfo.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const projectTypes = ["Residential", "Commercial", "Hospitality", "Retail", "Consultation", "Other"];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.projectType) nextErrors.projectType = "Choose a project type.";
    if (!form.message.trim() || form.message.trim().length < 20) {
      nextErrors.message = "Please share at least 20 characters about your project.";
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="container-page pb-24 pt-36 sm:pb-32 sm:pt-44" aria-labelledby="contact-page">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 id="contact-page" className="mt-8 editorial-title">
            Let&apos;s create
            <br />
            something meaningful.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Tell us what you are imagining. The form validates on the front end and is ready to connect to your preferred
            enquiry workflow.
          </p>
          <div className="mt-14 border-t border-ink/15 pt-8">
            <OfficeInfo />
          </div>
        </div>

        <form className="bg-bone p-6 sm:p-10 lg:p-12" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} error={errors.name} onChange={updateField} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={updateField}
              required
            />
            <Field label="Phone" name="phone" value={form.phone} onChange={updateField} />
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widecaps text-muted">Project Type</span>
              <select
                name="projectType"
                value={form.projectType}
                onChange={updateField}
                aria-invalid={Boolean(errors.projectType)}
                className="mt-3 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base focus:border-clay focus:ring-0"
                required
              >
                <option value="">Select type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType ? <ErrorText>{errors.projectType}</ErrorText> : null}
            </label>
            <Field label="Estimated Budget" name="budget" value={form.budget} onChange={updateField} />
            <Field label="Project Timeline" name="timeline" value={form.timeline} onChange={updateField} />
          </div>

          <label className="mt-8 block">
            <span className="text-xs font-semibold uppercase tracking-widecaps text-muted">
              Tell us about your project
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="7"
              aria-invalid={Boolean(errors.message)}
              className="mt-3 w-full resize-y border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base focus:border-clay focus:ring-0"
              required
            />
            {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}
          </label>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button type="submit">Send Enquiry</Button>
            {sent ? (
              <p className="text-sm font-semibold text-muted" role="status">
                Thank you. Your enquiry has been validated.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widecaps text-muted">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className="mt-3 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base focus:border-clay focus:ring-0"
        required={required}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ children }) {
  return <span className="mt-2 block text-sm font-semibold text-clay">{children}</span>;
}

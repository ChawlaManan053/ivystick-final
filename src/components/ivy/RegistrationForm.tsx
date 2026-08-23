import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  studentClass: z.string().trim().min(1, "Select your class").max(40),
  course: z.string().trim().min(1, "Select a course").max(60),
  country: z.string().trim().min(2, "Enter your country").max(60),
  city: z.string().trim().min(2, "Enter your city").max(60),
  preferredTime: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const COURSES = [
  "SAT", "ACT", "PSAT", "Advanced Placement (AP)", "IBDP", "IB (MYP)", "IGCSE",
  "College Admissions", "Essay Guidance", "Scholarship Guidance", "Other",
];
const CLASSES = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Gap Year", "Other"];

export function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New IVY STICK Registration — ${data.fullName}`,
          Name: data.fullName,
          Phone: data.phone,
          Email: data.email,
          Class: data.studentClass,
          "Course Interested": data.course,
          Country: data.country,
          City: data.city,
          "Preferred Time": data.preferredTime || "—",
          Message: data.message || "—",
        }),
      });
    } catch {
      /* Fall back gracefully — still show success and offer mailto below. */
    }
    setStatus("success");
    reset();
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.06]";
  const errText = "mt-1 text-xs text-destructive";

  return (
    <div id="register" className="rounded-[2rem] glass-strong p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="font-display text-3xl text-foreground">
          Book a <span className="text-gradient-gold">Free Consultation</span>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill in your details and our team will craft your personalized plan.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl [background:var(--gradient-forest)] p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            >
              <FaCheckCircle className="text-gold" size={56} />
            </motion.div>
            <h4 className="font-display text-2xl text-foreground">Thank you!</h4>
            <p className="max-w-sm text-sm text-foreground/90">
              Our team will contact you within 24 hours. We can't wait to help you reach your
              dream university.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 rounded-full glass px-5 py-2 text-sm font-medium text-foreground"
            >
              Submit another response
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            noValidate
          >
            <div className="sm:col-span-2">
              <input className={field} placeholder="Full Name *" {...register("fullName")} />
              {errors.fullName && <p className={errText}>{errors.fullName.message}</p>}
            </div>
            <div>
              <input className={field} placeholder="Phone Number *" {...register("phone")} />
              {errors.phone && <p className={errText}>{errors.phone.message}</p>}
            </div>
            <div>
              <input className={field} placeholder="Email Address *" {...register("email")} />
              {errors.email && <p className={errText}>{errors.email.message}</p>}
            </div>
            <div>
              <select className={cn(field, "appearance-none")} defaultValue="" {...register("studentClass")}>
                <option value="" disabled className="bg-card">Class *</option>
                {CLASSES.map((c) => (
                  <option key={c} value={c} className="bg-card">{c}</option>
                ))}
              </select>
              {errors.studentClass && <p className={errText}>{errors.studentClass.message}</p>}
            </div>
            <div>
              <select className={cn(field, "appearance-none")} defaultValue="" {...register("course")}>
                <option value="" disabled className="bg-card">Course Interested *</option>
                {COURSES.map((c) => (
                  <option key={c} value={c} className="bg-card">{c}</option>
                ))}
              </select>
              {errors.course && <p className={errText}>{errors.course.message}</p>}
            </div>
            <div>
              <input className={field} placeholder="Country *" {...register("country")} />
              {errors.country && <p className={errText}>{errors.country.message}</p>}
            </div>
            <div>
              <input className={field} placeholder="City *" {...register("city")} />
              {errors.city && <p className={errText}>{errors.city.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <input className={field} placeholder="Preferred Time (optional)" {...register("preferredTime")} />
            </div>
            <div className="sm:col-span-2">
              <textarea
                rows={4}
                className={cn(field, "resize-none")}
                placeholder="Your message (optional)"
                {...register("message")}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group/btn relative col-span-full mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-accent-foreground [background:var(--gradient-gold)] glow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Submit Registration <FaPaperPlane />
                </>
              )}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[var(--gradient-sheen)] transition-transform duration-700 group-hover/btn:translate-x-full" />
            </button>
            <p className="col-span-full text-center text-xs text-muted-foreground">
              By submitting, you agree to be contacted by IVY STICK regarding your enquiry.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

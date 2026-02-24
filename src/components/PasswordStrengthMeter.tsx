import { useMemo } from "react";
import { Check, X } from "lucide-react";

const COMMON_PASSWORDS = [
  "password123", "12345678", "qwerty123", "letmein12", "welcome1",
  "admin1234", "iloveyou1", "monkey123", "dragon123", "master123",
];

interface PasswordRequirement {
  label: string;
  met: boolean;
}

export const validatePassword = (password: string) => {
  return {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    notCommon: !COMMON_PASSWORDS.includes(password.toLowerCase()),
  };
};

export const isPasswordValid = (password: string) => {
  const v = validatePassword(password);
  return v.minLength && v.uppercase && v.lowercase && v.number && v.special && v.notCommon;
};

const PasswordStrengthMeter = ({ password }: { password: string }) => {
  const validation = useMemo(() => validatePassword(password), [password]);

  const requirements: PasswordRequirement[] = [
    { label: "Minimum 8 characters", met: validation.minLength },
    { label: "At least 1 uppercase letter (A-Z)", met: validation.uppercase },
    { label: "At least 1 lowercase letter (a-z)", met: validation.lowercase },
    { label: "At least 1 number (0-9)", met: validation.number },
    { label: "At least 1 special character (!@#$%^&*)", met: validation.special },
    { label: "Not a common password", met: validation.notCommon },
  ];

  const metCount = requirements.filter((r) => r.met).length;
  const strength = metCount <= 2 ? "Weak" : metCount <= 4 ? "Medium" : "Strong";
  const strengthColor =
    strength === "Weak" ? "bg-destructive" : strength === "Medium" ? "bg-coral" : "bg-mint";
  const strengthTextColor =
    strength === "Weak" ? "text-destructive" : strength === "Medium" ? "text-coral" : "text-mint";

  if (!password) return null;

  return (
    <div className="space-y-3 mt-2">
      {/* Strength bar */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-body text-xs text-muted-foreground">Password strength</span>
          <span className={`font-body text-xs font-semibold ${strengthTextColor}`}>{strength}</span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full ${strengthColor} rounded-full transition-all duration-300`}
            style={{ width: `${(metCount / requirements.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Requirements list */}
      <ul className="space-y-1">
        {requirements.map((req) => (
          <li key={req.label} className="flex items-center gap-2">
            {req.met ? (
              <Check size={12} className="text-mint flex-shrink-0" />
            ) : (
              <X size={12} className="text-destructive flex-shrink-0" />
            )}
            <span
              className={`font-body text-xs ${
                req.met ? "text-mint" : "text-muted-foreground"
              }`}
            >
              {req.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordStrengthMeter;

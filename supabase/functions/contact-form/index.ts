import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Lumka Contact <onboarding@resend.dev>",
        to: ["lumkaassistant@yahoo.com"],
        subject: `📩 Contact Request from ${firstName} ${lastName}`,
        reply_to: email,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; }
h2 { color: #6d28d9; }
.field { margin-bottom: 12px; }
.label { font-weight: bold; color: #475569; }
.message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-wrap; }
</style></head>
<body>
<h2>📩 New Contact Request</h2>

<div class="field">
<span class="label">Name:</span> ${firstName} ${lastName}
</div>

<div class="field">
<span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
</div>

<div class="field">
<span class="label">Message:</span>
<div class="message-box">${message}</div>
</div>

<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
<p style="color: #94a3b8; font-size: 13px;">This message was sent via the Lumka contact form. Reply directly to respond to ${firstName}.</p>
</body>
</html>`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      throw new Error("Failed to send email");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

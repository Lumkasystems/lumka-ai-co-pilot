import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    const { email, userId, interestedPlan } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // If userId is provided, send welcome email to authenticated user
    if (userId) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (!profile) {
        return new Response(
          JSON.stringify({ error: "Profile not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Calculate exact position
      const { data: positionData } = await supabase.rpc("get_waitlist_position", {
        user_uuid: userId,
      });
      const exactPosition = positionData || profile.waitlist_position || 1;
      const firstName = profile.first_name || profile.email.split("@")[0];

      // Send welcome email via Resend
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (resendApiKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Lumka Waitlist <onboarding@resend.dev>",
            to: [profile.email],
            subject: "Welcome to Lumka! You're In 🎉",
            html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; }
h1 { color: #6d28d9; }
h2 { color: #6d28d9; font-size: 18px; }
.highlight { background: linear-gradient(135deg, #6d28d9, #8b5cf6); color: white; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; }
.highlight .number { font-size: 36px; font-weight: bold; }
.agent { padding: 8px 0; }
.agent-icon { margin-right: 8px; }
.divider { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
.social a { color: #6d28d9; text-decoration: none; margin-right: 16px; }
.footer { color: #94a3b8; font-size: 13px; margin-top: 30px; }
.referral { background: #f0fdf4; border: 1px solid #86efac; padding: 16px; border-radius: 8px; margin: 20px 0; }
</style></head>
<body>
<h1>Welcome to Lumka! 🎉</h1>

<p>Hey ${firstName}!</p>

<p>🎉 <strong>You're officially on the Lumka waitlist!</strong></p>

<p>Thank you for joining 600+ virtual assistants who are ready to reclaim their time.</p>

<h2>HERE'S WHAT HAPPENS NEXT:</h2>
<ul>
<li>📅 <strong>Launch Date:</strong> April 2026</li>
<li>🎁 <strong>Your Exclusive Perk:</strong> 50% off for LIFE (locked in!)</li>
<li>📧 <strong>What to Expect:</strong>
  <ul>
    <li>Early beta testing invitations (March 2026)</li>
    <li>Product updates and sneak peeks</li>
    <li>Launch day early access</li>
  </ul>
</li>
</ul>

<div class="highlight">
<p style="margin:0;font-size:14px;">YOUR WAITLIST POSITION</p>
<p class="number" style="margin:8px 0;">#${exactPosition}</p>
<p style="margin:0;font-size:13px;opacity:0.9;">The earlier you joined, the earlier you'll get access!</p>
</div>

<hr class="divider">

<h2>WHAT IS LUMKA?</h2>
<p>Your AI co-pilot with 5 specialized agents:</p>

<div class="agent">📧 <strong>Email Guardian</strong> – Scans inbox 24/7, alerts urgent items</div>
<div class="agent">📅 <strong>Calendar Concierge</strong> – Books meetings, detects conflicts</div>
<div class="agent">💰 <strong>Finance Watchdog</strong> – Tracks bills, sends deadline alerts</div>
<div class="agent">🎨 <strong>Content Studio</strong> – Creates posts, transcribes meetings</div>
<div class="agent">📊 <strong>Operations Lab</strong> – Handles research, data work</div>

<p><strong>Result?</strong> You save 15+ hours every single week.</p>

<hr class="divider">

<div class="referral">
<p><strong>🚀 Want to move up the waitlist faster?</strong></p>
<p>Share Lumka with other VAs! For every 3 referrals, you jump 50 positions.</p>
<p>Your referral code: <strong>${profile.referral_code}</strong></p>
</div>

<hr class="divider">

<h2>STAY CONNECTED</h2>
<p>Follow our journey as we build in public:</p>
<div class="social">
<a href="https://www.linkedin.com/company/lumka-assistant">🔗 LinkedIn</a>
<a href="https://x.com/lumkaassistant">🐦 Twitter/X</a>
<a href="https://www.instagram.com/lumka_assistant">📸 Instagram</a>
</div>

<p>Got questions? Just hit reply – we read every email personally!</p>

<p>See you in April 2026! 🚀</p>

<p><strong>Best,<br>The Lumka Team</strong></p>

<div class="footer">
<p>P.S. Want to move up the waitlist faster? Share Lumka with other VAs! For every 3 referrals, you jump 50 positions.</p>
</div>
</body>
</html>`,
          }),
        });

        // Also notify admin
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Lumka Waitlist <onboarding@resend.dev>",
            to: ["lumkaassistant@yahoo.com"],
            subject: `🎉 New Waitlist Signup: ${profile.email}`,
            html: `
<h2>New Waitlist Signup!</h2>
<p><strong>Name:</strong> ${profile.first_name} ${profile.last_name}</p>
<p><strong>Email:</strong> ${profile.email}</p>
<p><strong>Position:</strong> #${exactPosition}</p>
<p><strong>Referral Code:</strong> ${profile.referral_code}</p>
<p><strong>Referred By:</strong> ${profile.referred_by || 'Direct signup'}</p>
<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
          }),
        });
      }

      return new Response(
        JSON.stringify({ success: true, position: exactPosition }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Legacy: simple email-only waitlist signup
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Valid email required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const trimmedEmail = email.trim().toLowerCase();

    const { error: dbError } = await supabase
      .from("waitlist_signups")
      .insert({ email: trimmedEmail, interested_plan: interestedPlan || null });

    if (dbError) {
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "This email is already on the waitlist!" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw dbError;
    }

    // Send confirmation email to user + notification to admin
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      // Send welcome email to the user
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Lumka Waitlist <onboarding@resend.dev>",
          to: [trimmedEmail],
          subject: "Welcome to the Lumka Waitlist! 🎉",
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; }
h1 { color: #6d28d9; }
h2 { color: #6d28d9; font-size: 18px; }
.agent { padding: 8px 0; }
.divider { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
.social a { color: #6d28d9; text-decoration: none; margin-right: 16px; }
</style></head>
<body>
<h1>Welcome to Lumka! 🎉</h1>
<p>You're officially on the Lumka waitlist!</p>
<p>Thank you for joining 600+ virtual assistants who are ready to reclaim their time.</p>

<h2>WHAT HAPPENS NEXT:</h2>
<ul>
<li>📅 <strong>Launch Date:</strong> April 2026</li>
<li>🎁 <strong>Your Exclusive Perk:</strong> 50% off for LIFE (locked in!)</li>
<li>📧 Early beta testing invitations (March 2026)</li>
</ul>

<hr class="divider">

<h2>WHAT IS LUMKA?</h2>
<p>Your AI co-pilot with 5 specialized agents:</p>
<div class="agent">📧 <strong>Email Guardian</strong> – Scans inbox 24/7</div>
<div class="agent">📅 <strong>Calendar Concierge</strong> – Books meetings, detects conflicts</div>
<div class="agent">💰 <strong>Finance Watchdog</strong> – Tracks bills & deadlines</div>
<div class="agent">🎨 <strong>Content Studio</strong> – Creates posts, transcribes meetings</div>
<div class="agent">📊 <strong>Operations Lab</strong> – Research & data work</div>

<hr class="divider">

<h2>STAY CONNECTED</h2>
<div class="social">
<a href="https://www.linkedin.com/company/lumka-assistant">🔗 LinkedIn</a>
<a href="https://x.com/lumkaassistant">🐦 Twitter/X</a>
<a href="https://www.instagram.com/lumka_assistant">📸 Instagram</a>
</div>

<p>See you in April 2026! 🚀</p>
<p><strong>– The Lumka Team</strong></p>
</body>
</html>`,
        }),
      });

      // Send notification to admin
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Lumka Waitlist <onboarding@resend.dev>",
          to: ["lumkaassistant@yahoo.com"],
          subject: `🎉 New Waitlist Signup: ${trimmedEmail}`,
          html: `
<h2>New Waitlist Signup!</h2>
<p><strong>Email:</strong> ${trimmedEmail}</p>
<p><strong>Interested Plan:</strong> ${interestedPlan || 'Not specified'}</p>
<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Successfully joined the waitlist!" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

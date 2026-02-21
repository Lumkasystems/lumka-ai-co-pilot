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
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Valid email required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const trimmedEmail = email.trim().toLowerCase();

    // Store in database
    const { error: dbError } = await supabase
      .from("waitlist_signups")
      .insert({ email: trimmedEmail });

    if (dbError) {
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "This email is already on the waitlist!" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw dbError;
    }

    // Send notification email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
    } else {
      const resendRes = await fetch("https://api.resend.com/emails", {
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
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
            <p>A new person has joined the Lumka waitlist.</p>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errBody = await resendRes.text();
        console.error(`Resend API error [${resendRes.status}]: ${errBody}`);
      } else {
        await resendRes.json();
        console.log(`Notification email sent for signup: ${trimmedEmail}`);
      }
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

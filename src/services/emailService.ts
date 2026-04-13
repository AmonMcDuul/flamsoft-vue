const API_URL = "https://js-backend-div.azurewebsites.net";

export interface SendEmailResponse {
  success: boolean;
  message?: string;
}

export async function sendEmail(
  email: string,
  message: string,
): Promise<SendEmailResponse> {
  const subject = `Contact via FlamSoft van ${email}`;
  const body = message;

  try {
    const response = await fetch(`${API_URL}/Email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, body }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `HTTP ${response.status}`);
    }

    let data = null;
    try {
      data = await response.json();
    } catch (jsonError) {
      console.log("API returned empty or non-JSON response, assuming success");
      return {
        success: true,
        message: "Bericht verzonden! Ik neem snel contact op.",
      };
    }

    return {
      success: true,
      message: "Bericht verzonden! Ik neem snel contact op.",
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      success: false,
      message: "Er ging iets mis. Probeer het later opnieuw.",
    };
  }
}

export async function setAlive(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/Email/setalive`);
    return response.ok;
  } catch (error) {
    console.error("setAlive error:", error);
    return false;
  }
}

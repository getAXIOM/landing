
interface DiscordMessage {
  content?: string;
  embeds?: DiscordEmbed[];
}

interface DiscordEmbed {
  title?: string;
  description?: string;
  color?: number;
  fields?: { name: string; value: string; inline?: boolean }[];
  footer?: { text: string };
  timestamp?: string;
}

export interface WaitlistFormData {
  email: string;
  firstName: string;
  lastName: string;
  discordUsername: string;
  imageUrl: string;
}

/**
 * Sends waitlist data to a Discord webhook
 */
export const sendToDiscordWebhook = async (webhookUrl: string, data: WaitlistFormData): Promise<boolean> => {
  try {
    // Create a Discord-formatted message
    const message: DiscordMessage = {
      embeds: [
        {
          title: "New AXIOM Waitlist Submission",
          description: `A new user has joined the AXIOM waitlist!`,
          color: 3355443, // Dark gray color
          fields: [
            {
              name: "Email",
              value: data.email,
              inline: false
            },
            {
              name: "Name",
              value: `${data.firstName} ${data.lastName}`,
              inline: true
            },
            {
              name: "Discord Username",
              value: data.discordUsername,
              inline: true
            },
            {
              name: "Image URL",
              value: data.imageUrl || "*No image provided*",
              inline: false
            }
          ],
          footer: {
            text: "AXIOM Waitlist System"
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    // Send the webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
    
    return response.ok;
  } catch (error) {
    console.error("Error sending to Discord webhook:", error);
    return false;
  }
};

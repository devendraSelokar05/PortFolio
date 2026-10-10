import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      subject,
      message
    } = body;

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        error: "Missing required fields"
      }, {
        status: 400
      });
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Mailgun, etc.
    // 2. Store the message in a database
    // 3. Set up notifications

    // For now, we'll just simulate a successful response
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!"
    }, {
      status: 200
    });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json({
      error: "Failed to send message"
    }, {
      status: 500
    });
  }
}
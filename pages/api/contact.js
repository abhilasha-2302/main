// pages/api/contact.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const {
      firstName,
      lastName,
      email,
      company,
      jobTitle,
      phone,
      country,
      message,
      interestedProducts,
      howDidYouHear,
      submittedAt
    } = req.body;

    // Prepare the row data
    const rowData = [
      submittedAt,
      firstName,
      lastName,
      email,
      company,
      jobTitle || '',
      phone || '',
      country,
      interestedProducts || '',
      howDidYouHear || '',
      message || ''
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:K', // Adjust range as needed
      valueInputOption: 'RAW',
      resource: {
        values: [rowData],
      },
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
}

// Optional: Add rate limiting middleware
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
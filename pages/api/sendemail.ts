import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

type Data = {
  message: string;
};

const isEmpty = (str: string) => {
  return !str || str.trim().length === 0;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    let { subject } = req.body;
    if (isEmpty(name) || isEmpty(message) || isEmpty(email)) {
      return res
        .status(400)
        .json({ message: 'Request is missing a required parameter.' });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    subject = subject || 'No subject';
    const msg = {
      from: process.env.SENDGRID_FROM!,
      to: process.env.SENDGRID_TO!,
      subject: 'From Website: ' + subject,
      replyTo: email,
      text: message,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
      return res.status(500).json({
        message:
          'An error occured while sending the email. Please send an email directly or try again later.',
      });
    }
  } else {
    return res
      .status(400)
      .send({ message: 'Route /api/sendmail/ only accepts POST request.' });
  }
}

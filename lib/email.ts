import nodemailer from 'nodemailer';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
export const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('❌ Email server configuration error:', error);
    return false;
  }
};

// Send email function
export const sendEmail = async (options: {
  to: string;
  subject: string;
  html: string;
  cc?: string;
}) => {
  try {
    const info = await transporter.sendMail({
      from: `"Pacerline" <${process.env.EMAIL_USER}>`,
      to: options.to,
      cc: options.cc,
      subject: options.subject,
      html: options.html,
    });

    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: String(error) };
  }
};

// Email templates
export const emailTemplates = {
  // Demo booking - Admin email
  demoBookingAdmin: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          🎯 New Demo Booking Request
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-top: 0;">Client Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        </div>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #1e40af; margin-top: 0;">Booking Details:</h3>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px;">
          <h3 style="color: #166534; margin-top: 0;">Next Steps:</h3>
          <ul style="color: #374151;">
            <li>Contact client within 24 hours</li>
            <li>Confirm demo date and time</li>
            <li>Prepare demo materials</li>
            <li>Add to calendar</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This email was sent from Pacerline website demo booking form.<br>
          Time: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `,

  // Demo booking - Client acknowledgment
  demoBookingClient: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">
          Thank You for Your Demo Request!
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Dear ${data.name},
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Thank you for requesting a demo of our ${data.service} service. We have received your request and will contact you within 24 hours to confirm the details.
        </p>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Demo Request Details:</h3>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Service:</strong> ${data.service}</p>
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #166534; margin-top: 0;">What Happens Next?</h3>
          <ul style="color: #374151;">
            <li>Our team will contact you within 24 hours</li>
            <li>We'll confirm your preferred date and time</li>
            <li>You'll receive a calendar invitation</li>
            <li>We'll prepare a customized demo for your needs</li>
          </ul>
        </div>

        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          If you have any questions or need to make changes, please don't hesitate to contact us at info@pacerline.com.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <div style="text-align: center;">
          <h3 style="color: #1f2937; margin-bottom: 10px;">Pacerline</h3>
          <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
            Email: info@pacerline.com<br>
            Website: https://pacerline.com
          </p>
        </div>
      </div>
    </div>
  `,

  // Contact form - Admin email
  contactAdmin: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
          📧 New Contact Form Submission
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #166534; margin-top: 0;">Message:</h3>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981;">
            ${data.message ? data.message.replace(/\n/g, '<br>') : 'No message provided'}
          </div>
        </div>

        <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px;">
          <h3 style="color: #92400e; margin-top: 0;">Action Required:</h3>
          <ul style="color: #374151;">
            <li>Respond to client within 24 hours</li>
            <li>Add contact to CRM system</li>
            <li>Follow up on their inquiry</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This email was sent from Pacerline website contact form.<br>
          Time: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `,

  // Contact form - Client acknowledgment
  contactClient: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">
          Thank You for Contacting Us!
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Dear ${data.name},
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.
        </p>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Message Summary:</h3>
          <p><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Our team is reviewing your inquiry and will provide you with a detailed response shortly. If your matter is urgent, please don't hesitate to call us directly.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <div style="text-align: center;">
          <h3 style="color: #1f2937; margin-bottom: 10px;">Pacerline</h3>
          <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
            Email: info@pacerline.com<br>
            Website: https://pacerline.com
          </p>
        </div>
      </div>
    </div>
  `,

  // About form - Admin email
  aboutAdmin: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          ℹ️ New About Us Form Submission
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-top: 0;">Visitor Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        </div>

        <div style="background-color: #faf5ff; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #7c3aed; margin-top: 0;">Inquiry Details:</h3>
          <p><strong>Interest:</strong> ${data.interest || 'General information'}</p>
          ${data.message ? `<div style="background-color: #ffffff; padding: 15px; border-radius: 4px; border-left: 4px solid #8b5cf6; margin-top: 10px;"><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</div>` : ''}
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px;">
          <h3 style="color: #0369a1; margin-top: 0;">Follow-up Actions:</h3>
          <ul style="color: #374151;">
            <li>Send company information</li>
            <li>Schedule introduction call if requested</li>
            <li>Add to newsletter list</li>
            <li>Follow up on specific interests</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This email was sent from Pacerline website about us form.<br>
          Time: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `,

  // About form - Client acknowledgment
  aboutClient: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">
          Thank You for Your Interest!
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Dear ${data.name},
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Thank you for your interest in learning more about Pacerline. We're excited to share our story and services with you.
        </p>

        <div style="background-color: #faf5ff; padding: 20px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #7c3aed; margin-top: 0;">What's Next?</h3>
          <ul style="color: #374151;">
            <li>Our team will review your inquiry</li>
            <li>We'll send you detailed company information</li>
            <li>A team member may reach out for a brief introduction</li>
            <li>You'll receive updates about our services</li>
          </ul>
        </div>

        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          In the meantime, feel free to explore our website to learn more about our comprehensive accounting and property management services.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <div style="text-align: center;">
          <h3 style="color: #1f2937; margin-bottom: 10px;">Pacerline</h3>
          <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
            Email: info@pacerline.com<br>
            Website: https://pacerline.com
          </p>
        </div>
      </div>
    </div>
  `,

  // Job application - Client acknowledgment only
  jobApplicationClient: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-bottom: 20px; text-align: center;">
          Application Received Successfully!
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Dear ${data.name},
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Thank you for your interest in joining the Pacerline team! We have successfully received your application.
        </p>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #166534; margin-top: 0;">Application Details:</h3>
          <p><strong>Position:</strong> ${data.position}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Application ID:</strong> ${Date.now()}</p>
        </div>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Next Steps:</h3>
          <ul style="color: #374151;">
            <li>Our HR team will review your application</li>
            <li>We'll contact qualified candidates within 2 weeks</li>
            <li>Initial interviews will be scheduled if you're selected</li>
            <li>Keep an eye on your email for updates</li>
          </ul>
        </div>

        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          We appreciate your interest in working with us and will be in touch if your qualifications match our current needs.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <div style="text-align: center;">
          <h3 style="color: #1f2937; margin-bottom: 10px;">Pacerline</h3>
          <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
            Email: info@pacerline.com<br>
            Website: https://pacerline.com<br>
            Careers: https://pacerline.com/careers
          </p>
        </div>
      </div>
    </div>
  `
};

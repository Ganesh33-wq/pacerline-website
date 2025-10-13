// Email Test Script
// Run with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

// Email configuration from .env.local
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// Create transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Test email function
async function testEmail() {
  try {
    console.log('🔄 Testing email configuration...');
    
    // Verify transporter
    await transporter.verify();
    console.log('✅ Email server connection successful');

    // Send test email
    const info = await transporter.sendMail({
      from: `"Pacerline Test" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: '🧪 Email Test - Pacerline Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1f2937;">✅ Email Test Successful!</h2>
          <p>This is a test email from your Pacerline website email system.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h3>Configuration Details:</h3>
            <p><strong>From:</strong> ${EMAIL_USER}</p>
            <p><strong>To:</strong> ${ADMIN_EMAIL}</p>
            <p><strong>Host:</strong> ${EMAIL_HOST}</p>
            <p><strong>Port:</strong> ${EMAIL_PORT}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #10b981;"><strong>✅ Email system is working correctly!</strong></p>
        </div>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📬 Email sent to:', ADMIN_EMAIL);

  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('🔐 Authentication failed. Please check:');
      console.log('   - Email username:', EMAIL_USER);
      console.log('   - Email password is correct');
      console.log('   - App-specific password is enabled (if using Gmail)');
    } else if (error.code === 'ECONNECTION') {
      console.log('🌐 Connection failed. Please check:');
      console.log('   - SMTP host:', EMAIL_HOST);
      console.log('   - SMTP port:', EMAIL_PORT);
      console.log('   - Internet connection');
    }
  }
}

// Run test
testEmail();
const nodemailer = require('nodemailer');

// Email configuration
class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: process.env.EMAIL_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER || 'info.clinickart@gmail.com',
                pass: process.env.EMAIL_PASS || 'your-app-password'
            }
        });
    }

    // Email template helpers
    getEmailContainerStart() {
        return `<div class="container" style="max-width: 600px; margin: 12px auto; background: white; border-radius: 16px; overflow: hidden; box-sizing: border-box; border: 2px solid #000;">`;
    }

    getEmailHeader() {
        return `
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff; max-width:600px; margin:0 auto; padding:0;">
                <tr>
                    <td class="header-padding" style="padding:14px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
                            <tr>
                                <td style="width:120px; vertical-align:middle; text-align:left;">
                                    <img src="https://clinickart.co/img/logo.png"
                                         alt="ClinicKart Logo"
                                         style="width:100px; max-width:100px; height:auto; display:block; background:transparent;" />
                                </td>
                                <td style="vertical-align:middle; text-align:left;">
                                    <span style="
                                        font-family: 'Poppins', Arial, sans-serif;
                                        font-weight:600;
                                        color:#444444;
                                        font-style:italic;
                                        font-size:13px;
                                        letter-spacing:0.3px;
                                        display:inline-block;
                                        vertical-align:middle;
                                        line-height:1.3;
                                    ">
                                        Empowering local dental suppliers for the digital age!
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        `;
    }

    getEmailFooter() {
        return `
            <div style="background: #fff; padding: 12px 18px; text-align: center; border-top: 1px solid #B2A4FF; margin-top: 16px;">
                <p style="color: #222; margin: 0 0 8px 0; font-size: 11px;">Best regards,<br><strong style="color: #222;">The ClinicKart Team</strong></p>
                <p style="color: #222; margin: 0; font-size: 9px;">This is an automated message. Please do not reply to this email.</p>
            </div>
        `;
    }

    getEmailContainerEnd() {
        return `</div>`;
    }

    // Send notification to admin when new contact form is submitted
    async sendAdminNotification(contactData) {
        const { name, email, phone, reason, message, createdAt } = contactData;
        
        const mailOptions = {
            from: process.env.EMAIL_FROM || `"ClinicKart Contact Form" <${process.env.EMAIL_USER}>`,
            to: 'support@clinickart.co, hemantkrishna5@gmail.com',
            subject: `New Contact Form Submission - ${reason ? reason.replace('-', ' ').toUpperCase() : 'General Inquiry'}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Contact Form Submission</title>
                    <style>
                        @media only screen and (max-width: 600px) {
                            .container { padding: 8px !important; }
                            .header-padding { padding: 10px !important; }
                            .main-padding { padding: 10px 10px 18px 10px !important; }
                            h2 { font-size: 18px !important; margin-bottom: 12px !important; }
                            p, span { font-size: 12px !important; }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0; background: #f5f5f5; font-family: Arial, sans-serif;">
                    ${this.getEmailContainerStart()}
                        ${this.getEmailHeader()}
                        <div class="main-padding" style="padding: 12px 18px 18px 18px;">
                            <h2 style="color: #333; margin: 0 0 12px 0; font-size: 20px;">🆕 New Contact Form Submission</h2>
                            
                            <div style="background: #fff7ed; border: 2px dashed #f97316; border-radius: 12px; padding: 14px; margin: 18px 0;">
                                <div style="margin-bottom: 12px;">
                                    <strong style="color: #f97316;">👤 Contact Details:</strong>
                                </div>
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>Name:</strong> ${name}
                                </p>
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>Email:</strong> ${email}
                                </p>
                                ${phone ? `<p style="color: #222; margin: 0 0 8px 0; font-size: 13px;"><strong>Phone:</strong> ${phone}</p>` : ''}
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>Inquiry Type:</strong> ${reason ? reason.replace('-', ' ').toUpperCase() : 'General Inquiry'}
                                </p>
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>Submitted:</strong> ${new Date(createdAt).toLocaleString()}
                                </p>
                            </div>

                            <div style="background: #f8f9ff; border-left: 4px solid #B2A4FF; border-radius: 8px; padding: 12px; margin: 18px 0;">
                                <h3 style="color: #333; margin: 0 0 8px 0; font-size: 16px;">📝 Message:</h3>
                                <p style="color: #222; margin: 0; line-height: 1.5; font-size: 13px; white-space: pre-line;">
                                    ${message}
                                </p>
                            </div>

                            <div style="background-color: #FFF7B2; border-left: 4px solid #222; padding: 8px; margin-bottom: 4px; border-radius: 4px;">
                                <p style="color: #222; margin: 0; font-size: 11px; line-height: 1.5;">
                                    <strong>Action Required:</strong> Please respond to this inquiry within 24 hours to maintain our excellent customer service standards.
                                </p>
                            </div>

                            <div style="text-align: center; margin: 18px 0;">
                                <a href="mailto:${email}" 
                                   style="display: inline-block; background: #16a34a; color: white; padding: 10px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; margin-right: 10px;">
                                    Reply to Customer →
                                </a>
                                ${phone ? `<a href="tel:${phone}" style="display: inline-block; background: #2563eb; color: white; padding: 10px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px;">Call Customer →</a>` : ''}
                            </div>
                        </div>
                        ${this.getEmailFooter()}
                    ${this.getEmailContainerEnd()}
                </body>
                </html>
            `
        };

        try {
            const result = await this.transporter.sendMail(mailOptions);
            console.log('Admin notification email sent:', result.messageId);
            return result;
        } catch (error) {
            console.error('Failed to send admin notification email:', error);
            throw error;
        }
    }

    // Send acknowledgment email to customer
    async sendCustomerAcknowledgment(contactData) {
        const { name, email, reason } = contactData;
        
        const mailOptions = {
            from: process.env.EMAIL_FROM || `"ClinicKart Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '✅ Thank You for Contacting ClinicKart - We Will Get Back to You Soon',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thank You for Contacting ClinicKart</title>
                    <style>
                        @media only screen and (max-width: 600px) {
                            .container { padding: 8px !important; }
                            .header-padding { padding: 10px !important; }
                            .main-padding { padding: 10px 10px 18px 10px !important; }
                            h2 { font-size: 18px !important; margin-bottom: 12px !important; }
                            p, span { font-size: 12px !important; }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0; background: #f5f5f5; font-family: Arial, sans-serif;">
                    ${this.getEmailContainerStart()}
                        ${this.getEmailHeader()}
                        <div class="main-padding" style="padding: 12px 18px 18px 18px;">
                            <h2 style="color: #333; margin: 0 0 12px 0; font-size: 20px;">Thank You for Contacting Us! 🙏</h2>
                            
                            <p style="color: #666; margin: 0 0 18px 0; line-height: 1.5; font-size: 13px;">
                                Dear <strong style="color: #333;">${name}</strong>,
                            </p>
                            
                            <div style="background: #f0f9ff; border: 2px dashed #0ea5e9; border-radius: 12px; padding: 14px; text-align: center; margin: 18px 0;">
                                <p style="color: #222; margin: 0 0 6px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Inquiry Received</p>
                                <div style="background: #0ea5e9; color: white; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 4px;">
                                    ✅ ${reason ? reason.replace('-', ' ').toUpperCase() : 'GENERAL INQUIRY'}
                                </div>
                                <p style="color: #222; margin: 6px 0 0 0; font-size: 11px;">We'll respond within 24 hours</p>
                            </div>

                            <p style="color: #666; margin: 0 0 18px 0; line-height: 1.5; font-size: 13px;">
                                We appreciate you taking the time to reach out to us. Your message is important to us, and we're committed to providing you with the best possible assistance.
                            </p>
                            
                            <div style="background: #f8f9ff; border-radius: 12px; padding: 14px; margin: 18px 0;">
                                <h3 style="color: #333; margin: 0 0 12px 0; font-size: 16px;">🚀 What happens next?</h3>
                                <ul style="color: #666; margin: 0; padding-left: 20px; font-size: 13px; line-height: 1.6;">
                                    <li>Our expert team will review your inquiry within 24 hours</li>
                                    <li>You'll receive a detailed response from our specialists</li>
                                    <li>We may contact you directly if we need additional information</li>
                                    <li>We'll provide you with the best solution for your needs</li>
                                </ul>
                            </div>
                            
                            <div style="background: #fff7ed; border-radius: 12px; padding: 14px; margin: 18px 0;">
                                <h3 style="color: #333; margin: 0 0 12px 0; font-size: 16px;">📞 Need immediate assistance?</h3>
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>📞 Phone:</strong> +91 8944094064
                                </p>
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>📧 Email:</strong> support@clinickart.co
                                </p>
                                <p style="color: #222; margin: 0 0 8px 0; font-size: 13px;">
                                    <strong>🕒 Working Hours:</strong> Mon to Sun (9:00 AM to 9:00 PM)
                                </p>
                                <p style="color: #222; margin: 0; font-size: 13px;">
                                    <strong>📍 Address:</strong> RK Hegde Nagar, Bangalore - 560077
                                </p>
                            </div>
                            
                            <p style="color: #666; margin: 0 0 18px 0; line-height: 1.5; font-size: 13px;">
                                In the meantime, feel free to browse our website to explore our comprehensive range of medical equipment and supplies.
                            </p>
                            
                            <div style="text-align: center; margin: 18px 0;">
                                <a href="https://clinickart.co" 
                                   style="display: inline-block; background: #16a34a; color: white; padding: 10px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; margin-right: 10px;">
                                    Visit Our Website →
                                </a>
                                <a href="https://vendor.clinickart.co" 
                                   style="display: inline-block; background: #2563eb; color: white; padding: 10px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px;">
                                    Vendor Dashboard →
                                </a>
                            </div>

                            <div style="background-color: #FFF7B2; border-left: 4px solid #222; padding: 8px; margin-bottom: 4px; border-radius: 4px;">
                                <p style="color: #222; margin: 0; font-size: 11px; line-height: 1.5;">
                                    <strong>About ClinicKart:</strong> We're empowering local dental suppliers for the digital age, providing cutting-edge solutions for modern dental practices.
                                </p>
                            </div>
                            
                            <p style="color: #666; margin: 4px 0 0 0; line-height: 1.5; font-size: 13px;">
                                Thank you for choosing ClinicKart!
                            </p>
                            
                            <p style="color: #666; margin: 12px 0 0 0; font-size: 13px;">
                                Best regards,<br>
                                <strong style="color: #333;">The ClinicKart Team</strong><br>
                                <em style="color: #999; font-size: 12px;">Infiniclinickart Supplies LLP</em>
                            </p>
                        </div>
                        ${this.getEmailFooter()}
                    ${this.getEmailContainerEnd()}
                </body>
                </html>
            `
        };

        try {
            const result = await this.transporter.sendMail(mailOptions);
            console.log('Customer acknowledgment email sent:', result.messageId);
            return result;
        } catch (error) {
            console.error('Failed to send customer acknowledgment email:', error);
            throw error;
        }
    }

    // Verify email configuration
    async verifyConnection() {
        try {
            await this.transporter.verify();
            console.log('✅ Email service is ready to send emails');
            return true;
        } catch (error) {
            console.error('❌ Email service configuration error:', error);
            return false;
        }
    }
}

module.exports = new EmailService();
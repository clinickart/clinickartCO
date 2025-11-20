# Email Configuration Instructions for ClinicKart Contact Form

## Gmail Configuration (Recommended)
To set up email functionality with Gmail:

1. Use your Gmail address or create a new one: hemantkrishna5@gmail.com
2. Enable 2-Factor Authentication in your Google Account
3. Generate an App Password:
   - Go to: https://myaccount.google.com/security
   - Select "2-Step Verification" 
   - Select "App passwords"
   - Choose "Mail" and your device
   - Copy the 16-character password

4. Update your .env file:
   EMAIL_USER=hemantkrishna5@gmail.com
   EMAIL_PASS=your-16-character-app-password

## Alternative Email Services

### Using Outlook/Hotmail:
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-app-password

### Using Custom SMTP:
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your-password

## Environment Variables to Set:
EMAIL_USER=hemantkrishna5@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx

## Security Notes:
- Never commit real credentials to version control
- Use App Passwords, not regular passwords
- Keep your .env file in .gitignore
- Consider using environment variables in production

## Testing Email Setup:
Run the backend server and submit a test contact form to verify emails are sent.
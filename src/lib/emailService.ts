export interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  company: string;
  updates: boolean;
  blogDigest: boolean;
}

export const submitDemoRequest = async (data: DemoRequestData): Promise<{ success: boolean; message: string }> => {
  console.log('submitDemoRequest called with data:', data);
  
  try {
    // Create mailto link for Hostinger deployment
    const subject = encodeURIComponent('New Demo Request - OTraze');
    const body = encodeURIComponent(`
New Demo Request from OTraze Website

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
- Company: ${data.company}
- Country: ${data.country}

Preferences:
- Product Updates: ${data.updates ? 'Yes' : 'No'}
- Blog Digest: ${data.blogDigest ? 'Yes' : 'No'}

This request was submitted from the OTraze website demo form.
    `);
    
    // Open email client
    window.location.href = `mailto:contact@otraze.io?subject=${subject}&body=${body}`;
    
    return {
      success: true,
      message: 'E-Mail-Client geöffnet! Bitte senden Sie die E-Mail ab.'
    };
  } catch (error) {
    console.error('Error submitting demo request:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
};

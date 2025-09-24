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
    // Send email directly to contact@otraze.io
    const res = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log('Email server response:', result);

    if (result.success) {
      return {
        success: true,
        message: 'Demo request submitted successfully! We will contact you soon.'
      };
    } else {
      return {
        success: false,
        message: result.error || 'An error occurred. Please try again later.'
      };
    }
  } catch (error) {
    console.error('Error submitting demo request:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
};

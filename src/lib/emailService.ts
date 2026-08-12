import emailjs from '@emailjs/browser';

export interface EmailParams {
  type: 'contact_message' | 'newsletter_subscription';
  name?: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  division?: string;
  productOrCaseStudy?: string;
}

export const sendEmailNotification = async (params: EmailParams): Promise<boolean> => {
  const env = (import.meta as unknown as { env: Record<string, string> }).env || {};
  const serviceId = env.VITE_EMAILJS_SERVICE_ID;
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    to_email: 'eniolaayobamidele0@gmail.com',
    from_name: params.name || 'Newsletter Subscriber',
    from_email: params.email,
    user_company: params.company || 'Not specified',
    project_type: params.projectType || 'General Inquiry',
    budget: params.budget || 'N/A',
    message: params.message || 'New newsletter subscription request',
    division: params.division || 'StackVerse Platform',
    product_details: params.productOrCaseStudy || 'N/A',
    submission_type: params.type,
    submitted_at: new Date().toLocaleString(),
  };

  if (serviceId && templateId && publicKey) {
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email successfully sent via EmailJS');
      return true;
    } catch (error) {
      console.error('EmailJS transmission failed:', error);
      return false;
    }
  } else {
    console.info(
      'EmailJS keys not detected in environment variables. Local persistence activated.'
    );
    return false;
  }
};

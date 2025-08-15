
declare global {
  interface Window {
    Razorpay: any;
  }
}

export const RAZORPAY_CONFIG = {
  key_id: "rzp_test_VIETwGSQnb8sjv",
  key_secret: "S2RN0PwPrrzsyBR2OKWrmckg",
};

export interface PaymentOptions {
  amount: number; // in paise
  currency?: string;
  name: string;
  description: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

// Function to load Razorpay script
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Razorpay script loaded successfully');
      resolve(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
      resolve(false);
    };
    
    document.head.appendChild(script);
  });
};

// Create order function (frontend simulation)
export const createOrder = async (amount: number, currency: string = 'INR') => {
  // Since we can't create real orders without backend, we'll simulate it
  const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    id: orderId,
    amount: amount,
    currency: currency,
    receipt: `receipt_${Date.now()}`,
  };
};

export const initiatePayment = async (options: PaymentOptions) => {
  try {
    // Load Razorpay script
    const isLoaded = await loadRazorpayScript();
    
    if (!isLoaded) {
      throw new Error('Failed to load Razorpay. Please check your internet connection and disable ad blockers.');
    }

    // For test mode, we don't need to create orders - just use direct payment
    const razorpayOptions = {
      key: RAZORPAY_CONFIG.key_id,
      amount: options.amount,
      currency: options.currency || 'INR',
      name: options.name,
      description: options.description,
      // Remove order_id for test mode to avoid API validation errors
      handler: (response: any) => {
        console.log('Payment Success:', response);
        // Generate a fake order ID for frontend handling
        response.order_id = generateOrderId();
        options.handler(response);
      },
      prefill: options.prefill || {},
      theme: {
        color: options.theme?.color || '#3B82F6',
      },
      modal: {
        ondismiss: () => {
          console.log('Payment cancelled by user');
        },
        escape: true,
        backdropclose: true,
      },
      retry: {
        enabled: true,
        max_count: 3
      }
    };

    const razorpay = new window.Razorpay(razorpayOptions);
    
    razorpay.on('payment.failed', function (response: any) {
      console.error('Payment failed:', response.error);
      alert(`Payment failed: ${response.error.description || 'Unknown error occurred'}`);
    });

    razorpay.open();
  } catch (error) {
    console.error('Payment initiation error:', error);
    throw error;
  }
};

export const generateOrderId = () => {
  return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Verify payment function (frontend simulation)
export const verifyPayment = async (paymentId: string, orderId: string, signature: string) => {
  // In a real application, this would be done on the backend
  // For frontend simulation, we'll just return success
  console.log('Payment verification (simulated):', {
    paymentId,
    orderId,
    signature
  });
  
  return {
    success: true,
    message: 'Payment verified successfully'
  };
};
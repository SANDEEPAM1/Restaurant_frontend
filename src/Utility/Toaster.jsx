import { toast } from 'react-hot-toast';

// Success Toast
export const showSuccessToast = (message) => {
    toast.success(message, {
        position: 'top-right',
        duration: 4000, 
    });
};

// Error Toast
export const showErrorToast = (message) => {
    toast.error(message, {
        position: 'top-right',
        duration: 4000, 
    });
};

// Info Toast
export const showInfoToast = (message) => {
    toast(message, {
        position: 'top-right',
        duration: 4000, 
        icon: 'ℹ️',
    });
};

// Async Promise Toast
export const showToastPromise = (promise, messages) => {
    toast.promise(promise, {
        loading: messages.loading || 'Loading...',
        success: messages.success || 'Operation successful!',
        error: messages.error || 'Something went wrong!',
    });
};


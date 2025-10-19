import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { ErrorMessageProps } from '@/types/props';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message = 'Something went wrong. Please try again.',
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Error
      </h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;

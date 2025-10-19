import { Component, ErrorInfo } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "@/types/props";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <AlertCircle className="mb-4 text-red-500 size-16" />
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Something went wrong
          </h2>
          <p className="max-w-md mb-6 text-center text-gray-600">
            {this.state.error?.message ||
              "An unexpected error occurred. Please try again."}
          </p>
          <button
            onClick={this.handleRetry}
            className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-black rounded-lg hover:bg-gray-800"
          >
            <RefreshCw className="size-4" />
            <span>Try Again</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

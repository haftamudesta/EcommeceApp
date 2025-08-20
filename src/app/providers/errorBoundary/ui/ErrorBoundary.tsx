import * as React from 'react';
import { PageErrors } from '@/widgets/pageError';

interface ErrorBoundaryProps{
        children:React.ReactNode
}
interface ErrorBoundaryState{
        hasError:boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
  constructor(props:ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:Error) {
    return { hasError: true };
  }

  componentDidCatch(error:Error, info:React.ErrorInfo) {
    console.log(error,info)
  }

  render() {
    if (this.state.hasError) {
      return <PageErrors />;
    }

    return this.props.children;
  }
}
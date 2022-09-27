import { Component, ErrorInfo } from 'react';

type Props = {
  children: React.ReactNode;
}

type State = {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

  state = {
    hasError: false,
  }

  // public static getDerivedStateFromProps(error: Error): State {
  //   // error
  //   console.log(error);
  //   return { hasError: true }
  // }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // console.log('errorInfo: ', errorInfo);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oh no, error has occured!</h1>
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
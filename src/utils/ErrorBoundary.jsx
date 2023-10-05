import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Передаємо помилку до стану
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ви можете також здійснювати журналювання помилок або надсилати їх на сервер
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Відобразити резервний контент або повідомлення про помилку
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

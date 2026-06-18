import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, errorInfo) { console.error("Crash Engine Layer captured:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="crash-recovery-view">
          <h2>iBomma Stream Recovery Blocked</h2>
          <p>An unexpected engine interruption occurred. Refresh the pipeline.</p>
          <button onClick={() => window.location.reload()}>Re-initialize</button>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
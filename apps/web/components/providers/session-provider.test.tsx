/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SessionProvider, useSession } from './session-provider';

function TestComponent() {
  const session = useSession();

  if (!session) {
    return <div data-testid="no-session">No Session</div>;
  }

  return (
    <div>
      <span data-testid="user-id">{session.userId}</span>
      <span data-testid="merchant-id">{session.merchantId}</span>
      {session.merchantName && <span data-testid="merchant-name">{session.merchantName}</span>}
    </div>
  );
}

describe('SessionProvider', () => {
  it('provides null session by default when not wrapped in provider', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('no-session')).toBeInTheDocument();
  });

  it('provides the session value to its children', () => {
    const session = {
      userId: 'user-123',
      merchantId: 'merch-456',
      merchantName: 'Test Merchant'
    };

    render(
      <SessionProvider session={session}>
        <TestComponent />
      </SessionProvider>
    );

    expect(screen.getByTestId('user-id')).toHaveTextContent('user-123');
    expect(screen.getByTestId('merchant-id')).toHaveTextContent('merch-456');
    expect(screen.getByTestId('merchant-name')).toHaveTextContent('Test Merchant');
  });

  it('handles session without merchantName', () => {
    const session = {
      userId: 'user-123',
      merchantId: 'merch-456'
    };

    render(
      <SessionProvider session={session}>
        <TestComponent />
      </SessionProvider>
    );

    expect(screen.getByTestId('user-id')).toHaveTextContent('user-123');
    expect(screen.getByTestId('merchant-id')).toHaveTextContent('merch-456');
    expect(screen.queryByTestId('merchant-name')).not.toBeInTheDocument();
  });

  it('handles null session provided explicitly', () => {
    render(
      <SessionProvider session={null}>
        <TestComponent />
      </SessionProvider>
    );

    expect(screen.getByTestId('no-session')).toBeInTheDocument();
  });
});

import { render, fireEvent } from '@testing-library/react';
import SendEmailForm from './SendEmailForm';

describe('SendEmailForm', () => {
    test('renders form inputs', () => {
        const { getByLabelText } = render(<SendEmailForm />);
        expect(getByLabelText(/subject/i)).toBeInTheDocument();
        expect(getByLabelText(/message/i)).toBeInTheDocument();
        expect(getByLabelText(/from email address/i)).toBeInTheDocument();
        expect(getByLabelText(/recipient email address/i)).toBeInTheDocument();
    });

    test('handles form submission', () => {
        const mockHandleSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
            <SendEmailForm onSubmit={mockHandleSubmit} />
        );

        fireEvent.change(getByLabelText(/subject/i), { target: { value: 'Test subject' } });
        fireEvent.change(getByLabelText(/message/i), { target: { value: 'Test message' } });
        fireEvent.change(getByLabelText(/from email address/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(getByLabelText(/recipient email address/i), {
            target: { value: 'recipient@example.com' },
        });

        fireEvent.click(getByText(/send email/i));

        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
});
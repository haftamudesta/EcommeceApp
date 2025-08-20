import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Input } from "./Input";

describe('Input', () => {
        
        test('renders input with default props', () => {
                render(<Input data-testid="input-test" />)
    
                const input = screen.getByTestId('input-test')
                expect(input).toBeInTheDocument()
                expect(input).toHaveAttribute('type', 'text')
                expect(input).toHaveValue('')
                expect(input).not.toBeDisabled()
        })
         test('renders disabled input when disabled prop is true', () => {
                render(<Input disabled data-testid="input-test" />)
    
                const input = screen.getByTestId('input-test')
                expect(input).toBeDisabled()
        })
        test('renders with custom value', () => {
                render(<Input value="test one" data-testid="input-test" />)
    
                const input = screen.getByTestId('input-test')
                expect(input).toHaveValue('test one')
        })
});

describe('Password type', () => {
        const user = userEvent.setup()

        test('renders password toggle button for password type', () => {
                render(<Input type="password" data-testid="test-input" />)
                
                const toggleButton = screen.getByRole('button', { name: /show password/i })
                expect(toggleButton).toBeInTheDocument()
        })
        test('toggles password visibility when button is clicked', async () => {
                render(<Input type="password" data-testid="test-input" />)
      
                const input = screen.getByTestId('test-input')
                const toggleButton = screen.getByRole('button', { name: /show password/i })
      
     
        expect(input).toHaveAttribute('type', 'password')
        await user.click(toggleButton)
        expect(input).toHaveAttribute('type', 'text')
        expect(toggleButton).toHaveAttribute('aria-label', 'Hide password')
      
      
        await user.click(toggleButton)
        expect(input).toHaveAttribute('type', 'password')
        expect(toggleButton).toHaveAttribute('aria-label', 'Show password')
        })
        test('renders icon when provided', () => {
                const TestIcon = () => <span data-testid="test-icon">📧</span>
                render(<Input Icon={<TestIcon />} data-testid="test-input" />)
    
                expect(screen.getByTestId('test-icon')).toBeInTheDocument()
        })
        test('handles focus and blur events', async () => {
                render(<Input data-testid="test-input" />)
    
                const input = screen.getByTestId('test-input')
    
                await user.click(input)
                expect(input).toHaveFocus()
    
                await user.tab() 
                expect(input).not.toHaveFocus()
        })
        test('passes additional HTML attributes to input', () => {
                render(
                <Input 
                placeholder="Enter text" 
                maxLength={10} 
                data-testid="test-input" 
                />
               )
    
                const input = screen.getByTestId('test-input')
                expect(input).toHaveAttribute('placeholder', 'Enter text')
                expect(input).toHaveAttribute('maxlength', '10')
        })
        test('supports different input types', () => {
                const { rerender } = render(<Input type="email" data-testid="test-input" />)
    
                let input = screen.getByTestId('test-input')
                expect(input).toHaveAttribute('type', 'email')
    
                rerender(<Input type="number" data-testid="test-input" />)
                input = screen.getByTestId('test-input')
                expect(input).toHaveAttribute('type', 'number')

                rerender(<Input type="password" data-testid="test-input" />)
                input = screen.getByTestId('test-input')
                expect(input).toHaveAttribute('type', 'password')
        })
})
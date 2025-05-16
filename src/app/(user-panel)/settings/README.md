# Settings Section Documentation

## Overview

This directory contains all the settings pages for the application. The settings pages follow a consistent design pattern and use shared components to ensure a cohesive user experience.

## Page Structure

Each settings page follows a similar structure:

1. Page title and description
2. Form sections with clear headings
3. Relevant form controls (switches, radio buttons, selects, etc.)
4. Submit button with loading state

## Available Pages

### Profile Settings

- **File**: `/profile/page.tsx`
- **Purpose**: Allows users to update their personal information and profile settings
- **Features**: Profile photo upload, name, bio, social links, display preferences

### Account Settings

- **File**: `/account/page.tsx`
- **Purpose**: Manages account-level settings and integrations
- **Features**: Email address, social connections, account deletion

### Security Settings

- **File**: `/security/page.tsx`
- **Purpose**: Controls security-related settings
- **Features**: Password change, two-factor authentication, connected devices

### Appearance Settings

- **File**: `/appearance/page.tsx`
- **Purpose**: Customizes the visual appearance of the application
- **Features**: Theme selection, text size, accessibility options

### Notifications Settings

- **File**: `/notifications/page.tsx`
- **Purpose**: Controls notification preferences
- **Features**: Email notifications, push notifications, notification frequency

### Privacy Settings

- **File**: `/privacy/page.tsx`
- **Purpose**: Manages privacy and data settings
- **Features**: Profile visibility, activity visibility, data collection preferences

### Tags Settings

- **File**: `/tags/page.tsx`
- **Purpose**: Manages tag preferences and subscriptions
- **Features**: Follow/unfollow tags, mute tags, tag email notifications

### Feed Settings

- **File**: `/feed/page.tsx`
- **Purpose**: Customizes feed content and appearance
- **Features**: Content algorithm, feed components, read/unread options

### Feedback Page

- **File**: `/feedback/page.tsx`
- **Purpose**: Allows users to submit feedback about the platform
- **Features**: Feedback type, satisfaction rating, comment submission

### Help Center

- **File**: `/help/page.tsx`
- **Purpose**: Provides help resources and support options
- **Features**: FAQs, contact support, resource links

## Technology Stack

- React + Next.js
- React Hook Form for form management
- Zod for form validation
- Radix UI for accessible components
- Tailwind CSS for styling

## Development Guide

### Adding a New Settings Page

1. Create a new directory under `/settings/`
2. Create a `page.tsx` file with the client directive
3. Use the shared form components
4. Add validation schema using Zod
5. Implement form submission handling

### Common Components

- `Form` - Form wrapper with validation
- `Switch` - Toggle switch for boolean settings
- `RadioGroup` - Selection between exclusive options
- `Select` - Dropdown for selecting from multiple options
- `Button` - For form submission

## Changelog

### Version 1.0.0 (2023-07-01)

- Initial release with basic settings pages

### Version 1.1.0 (2023-08-15)

- Added privacy and feed settings
- Improved accessibility features

### Version 1.2.0 (2023-10-01)

- Added help center and feedback pages
- Enhanced mobile responsiveness

## Roadmap

- Integration with backend API endpoints
- User preference persistence
- Real-time settings update

## Dependencies

This settings section relies on several important packages:

1. **UI Components**:

   - Radix UI components (`@radix-ui/react-*`)
   - `class-variance-authority` for component variants
   - `lucide-react` for icons

2. **Form Management**:

   - `react-hook-form` for form state management
   - `@hookform/resolvers` for schema validation
   - `zod` for schema definition

3. **Notifications**:
   - `sonner` for toast notifications

Make sure these dependencies are correctly installed in your package.json.

## Toast Notifications

The settings section uses the Sonner library to provide toast notifications for form submissions and other user actions. The notifications are managed through a centralized system:

- **ToasterProvider**: A provider component that wraps all settings pages to enable toast notifications.
- **Form Submission Helper**: A utility function `handleSettingsSubmit` in `src/lib/form-helpers.ts` handles form submissions with toast notifications.

### Usage

```tsx
// Import the helper function
import { handleSettingsSubmit } from "@/lib/form-helpers";

// In your form submission handler
async function onSubmit(data: YourFormValues) {
  setIsLoading(true);

  try {
    await handleSettingsSubmit(data, "section-name");
  } finally {
    setIsLoading(false);
  }
}
```

The toast notifications provide feedback to users when:

- A form submission is in progress (loading state)
- A form submission succeeds (success state)
- A form submission fails (error state)

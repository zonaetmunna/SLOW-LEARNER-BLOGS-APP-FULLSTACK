import { toast } from "sonner";

/**
 * Helper function to handle form submissions with toast notifications
 * @param formData The form data to be submitted
 * @param settingsType The type of settings being updated (e.g., 'appearance', 'privacy')
 * @param mockDelay Optional delay to simulate API call (ms)
 * @returns Promise that resolves when the submission is complete
 */
export async function handleSettingsSubmit(
  formData: any,
  settingsType: string,
  mockDelay: number = 1000
): Promise<void> {
  // Show loading toast
  toast.loading(`Saving ${settingsType} settings...`);

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, mockDelay));

    // Log the form data (replace with actual API call)
    console.log(`${settingsType} settings submitted:`, formData);

    // Show success toast
    toast.success(`${settingsType} settings updated successfully!`);
  } catch (error) {
    // Show error toast
    toast.error(`Failed to update ${settingsType} settings. Please try again.`);
    console.error(`Error updating ${settingsType} settings:`, error);
  }
}

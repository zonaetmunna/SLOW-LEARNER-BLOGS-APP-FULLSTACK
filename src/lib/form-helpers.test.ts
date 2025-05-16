import { toast } from "sonner";
import { handleSettingsSubmit } from "./form-helpers";

// Mock sonner toast
jest.mock("sonner", () => ({
  toast: {
    loading: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("Form Helpers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("handleSettingsSubmit", () => {
    const mockFormData = { testKey: "testValue" };
    const settingsType = "appearance";

    it("should show loading and success toasts on successful submission", async () => {
      await handleSettingsSubmit(mockFormData, settingsType, 10); // Use shorter delay for tests

      expect(toast.loading).toHaveBeenCalledWith(
        `Saving ${settingsType} settings...`
      );
      expect(console.log).toHaveBeenCalledWith(
        `${settingsType} settings submitted:`,
        mockFormData
      );
      expect(toast.success).toHaveBeenCalledWith(
        `${settingsType} settings updated successfully!`
      );
    });

    it("should show error toast when an error occurs", async () => {
      // Mock console.log to throw an error
      jest.spyOn(console, "log").mockImplementation(() => {
        throw new Error("Test error");
      });

      await handleSettingsSubmit(mockFormData, settingsType, 10);

      expect(toast.loading).toHaveBeenCalledWith(
        `Saving ${settingsType} settings...`
      );
      expect(toast.error).toHaveBeenCalledWith(
        `Failed to update ${settingsType} settings. Please try again.`
      );
      expect(console.error).toHaveBeenCalledWith(
        `Error updating ${settingsType} settings:`,
        expect.any(Error)
      );
    });

    it("should use the provided settings type in toast messages", async () => {
      const customType = "custom-section";

      await handleSettingsSubmit(mockFormData, customType, 10);

      expect(toast.loading).toHaveBeenCalledWith(
        `Saving ${customType} settings...`
      );
      expect(toast.success).toHaveBeenCalledWith(
        `${customType} settings updated successfully!`
      );
    });
  });
});

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function AccountSettingsPage() {
  const [email] = useState("user@example.com");

  // Social connect buttons
  const socialConnections = [
    { provider: "Facebook", id: "facebook", connected: false },
    { provider: "GitHub", id: "github", connected: false },
    { provider: "Apple", id: "apple", connected: false },
    { provider: "Google", id: "google", connected: true },
  ];

  const handleConnect = (provider: string) => {
    toast.success(`Connecting to ${provider}...`);
  };

  const handleRemove = (provider: string) => {
    toast.success(`Removed connection to ${provider}`);
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSettingPassword, setIsSettingPassword] = useState(false);

  const handleSetPassword = () => {
    if (!password) return;

    setIsSettingPassword(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Password set successfully");
      setPassword("");
      setIsSettingPassword(false);
    }, 1000);
  };

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-medium">Account access</h3>
      </div>

      {/* Email Section */}
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium">Account email</h4>
          <p className="text-sm text-muted-foreground">
            The email address associated with your account
          </p>
        </div>

        <div className="flex items-center gap-2 p-3 rounded-md bg-muted/30">
          <div className="flex items-center gap-2 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>{email}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            <path d="M6 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            <path d="M16 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            <path d="M6 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
          </svg>
        </div>
      </div>

      {/* Login Accounts Section */}
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium">Add login account</h4>
          <p className="text-sm text-muted-foreground">
            Add more accounts to ensure you never lose access to your profile
            and to make logging in quick and easy across devices
          </p>
        </div>

        <div className="space-y-3">
          {socialConnections.map((connection) =>
            connection.connected ? (
              <div
                key={connection.id}
                className="flex items-center justify-between p-3 rounded-md bg-muted/30"
              >
                <div className="flex items-center gap-3">
                  <SocialIcon provider={connection.id} />
                  <span>Connected with {connection.provider}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemove(connection.provider)}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <Button
                key={connection.id}
                variant="outline"
                className="w-full justify-start gap-3 h-12"
                onClick={() => handleConnect(connection.provider)}
              >
                <SocialIcon provider={connection.id} />
                <span>Connect with {connection.provider}</span>
              </Button>
            )
          )}
        </div>
      </div>

      {/* Password Section */}
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium">Set your password</h4>
          <p className="text-sm text-muted-foreground">
            Please enter your new password
          </p>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          <Button
            onClick={handleSetPassword}
            disabled={!password || isSettingPassword}
          >
            {isSettingPassword ? "Setting..." : "Set password"}
          </Button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-destructive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" x2="12" y1="9" y2="13" />
            <line x1="12" x2="12.01" y1="17" y2="17" />
          </svg>
          <h4 className="text-base font-medium">Danger zone</h4>
        </div>

        <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5 space-y-4 text-sm">
          <p className="text-base">Deleting your account will:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Permanently delete your profile, along with your authentication
              associations.
            </li>
            <li>
              Permanently delete all your content, including your posts,
              bookmarks, comments, upvotes, etc.
            </li>
          </ol>
          <div className="pt-2">
            <Button variant="destructive">Delete account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component to render social icons
function SocialIcon({ provider }: { provider: string }) {
  switch (provider) {
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-600"
        >
          <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "apple":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.693 11.684c.02 2.112 1.838 2.806 1.861 2.818-.015.048-.291.995-1.883 1.968-1.136.903-2.231.988-2.596.988-.26.016-1.555.124-2.923-.863-2.355-1.517-3.664-4.168-3.664-4.168s-1.838-2.816-.475-5.566c1.162-2.367 3.068-2.125 3.068-2.125.766-.08 1.493.156 2.134.458 1.142.543 1.692.349 2.338.174 1.22-.332 2.206-1.471 2.206-1.471s-1.196 2.143-2.266 3.711c-.677.99-1.629 1.175-1.85 1.243-1.372.425-.979 1.541-.979 1.541l.037.026c.387.344 1.035.304 1.777.234.29-.027.567-.075.83-.135-.021.087-.034.175-.034.266 0 .297.054.582.14.85-1.904.141-2.622 1.787-2.622 1.787.021-.096.05-.194.085-.297.196-.58.624-1.288 1.453-1.527.421-.12.882-.19 1.363-.211z" />
          <path d="M12.391 4.654c-.8-.8-1.601-.4-2.001-.4-.4 0-1.2.4-2.001.4-1.2 0-2.401-1.2-2.401-2.801 0-1.601 1.2-2.802 2.401-2.802.8 0 1.601.4 2.001.4.4 0 1.2-.4 2.001-.4 1.2 0 2.401 1.2 2.401 2.802 0 1.6-1.2 2.801-2.401 2.801z" />
        </svg>
      );
    case "google":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#4285F4"
            d="M12.0001 4.82047V9.76493H16.9512C16.7087 10.8055 16.0432 11.7097 15.0839 12.3286L18.4888 14.9356C20.1336 13.4296 21.1198 11.2101 21.1198 8.57785C21.1198 7.94843 21.0578 7.33912 20.9409 6.75H12.0001V4.82047Z"
          />
          <path
            fill="#34A853"
            d="M5.27789 10.4725L4.60728 11.0005L1.95007 13.0004C3.51176 16.0073 6.58256 18.0002 10.6503 18.0002C13.7278 18.0002 16.2735 16.892 18.1049 14.9356L14.7C13.5681 15.6866 12.1178 16.125 10.6503 16.125C8.00233 16.125 5.77301 14.422 4.95523 12.0001C4.75033 11.4751 4.52844 10.924 4.52844 10.3126C4.52844 9.71124 4.56551 9.35434 4.95523 8.6251C5.26787 7.92078 4.96076 7.27647 4.60728 6.75048L5.27789 10.4725Z"
          />
          <path
            fill="#FBBC05"
            d="M10.6503 4.49951C11.7198 4.49951 12.7025 4.89473 13.467 5.24976C13.467 5.24976 15.7994 3.37449 15.8741 3.30991C14.1442 1.68747 12.5042 0.999878 10.6503 0.999878C6.58256 0.999878 3.51176 2.99274 1.95007 5.99964L4.96887 8.62474C5.77308 6.2029 8.01233 4.49951 10.6503 4.49951Z"
          />
          <path
            fill="#EA4335"
            d="M10.6503 4.49951C8.01233 4.49951 5.77301 6.2029 4.95523 8.62474L1.95007 5.99964C3.51176 2.99274 6.58256 0.999878 10.6503 0.999878C12.5042 0.999878 14.1442 1.68747 15.8741 3.30991L13.467 5.24976C12.7025 4.89473 11.7198 4.49951 10.6503 4.49951Z"
          />
        </svg>
      );
    default:
      return <div className="w-6 h-6 bg-muted rounded-full" />;
  }
}

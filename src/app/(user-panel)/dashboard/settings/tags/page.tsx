"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Tag = {
  id: string;
  name: string;
};

export default function TagsSettingsPage() {
  const [tags, setTags] = useState<Tag[]>([
    { id: "1", name: "javascript" },
    { id: "2", name: "react" },
    { id: "3", name: "typescript" },
    { id: "4", name: "nextjs" },
    { id: "5", name: "web-development" },
  ]);
  const [tagInput, setTagInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [muted, setMuted] = useState<string[]>(["angular", "vue", "svelte"]);
  const [mutedInput, setMutedInput] = useState("");

  const addTag = () => {
    if (!tagInput.trim()) return;
    const trimmedTag = tagInput.trim().toLowerCase().replace(/\s+/g, "-");

    // Check if tag already exists
    if (tags.some((tag) => tag.name === trimmedTag)) {
      toast.error("Tag already exists");
      return;
    }

    const newTag = {
      id: Date.now().toString(),
      name: trimmedTag,
    };

    setTags([...tags, newTag]);
    setTagInput("");
    toast.success(`Added tag: ${trimmedTag}`);
  };

  const removeTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
    toast.success("Tag removed");
  };

  const addMuted = () => {
    if (!mutedInput.trim()) return;
    const trimmedTag = mutedInput.trim().toLowerCase().replace(/\s+/g, "-");

    // Check if tag already exists in muted
    if (muted.includes(trimmedTag)) {
      toast.error("Tag already muted");
      return;
    }

    setMuted([...muted, trimmedTag]);
    setMutedInput("");
    toast.success(`Muted tag: ${trimmedTag}`);
  };

  const removeMuted = (tag: string) => {
    setMuted(muted.filter((t) => t !== tag));
    toast.success("Tag unmuted");
  };

  const saveChanges = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Tag preferences saved");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tag Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize the content you see in your feed based on tags
        </p>
      </div>
      <Separator />

      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium">Followed Tags</h4>
          <p className="text-sm text-muted-foreground">
            Content with these tags will be prioritized in your feed
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag.id} variant="secondary" className="px-3 py-1">
              {tag.name}
              <button
                type="button"
                onClick={() => removeTag(tag.id)}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {tag.name} tag</span>
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <Label htmlFor="add-tag" className="sr-only">
              Add tag
            </Label>
            <Input
              id="add-tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add new tag..."
              onKeyDown={(e) => e.key === "Enter" && addTag()}
            />
          </div>
          <Button variant="secondary" onClick={addTag}>
            Add
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium">Muted Tags</h4>
          <p className="text-sm text-muted-foreground">
            Content with these tags will not be shown in your feed
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {muted.map((tag) => (
            <Badge key={tag} variant="outline" className="px-3 py-1 bg-muted">
              {tag}
              <button
                type="button"
                onClick={() => removeMuted(tag)}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Unmute {tag} tag</span>
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <Label htmlFor="mute-tag" className="sr-only">
              Mute tag
            </Label>
            <Input
              id="mute-tag"
              value={mutedInput}
              onChange={(e) => setMutedInput(e.target.value)}
              placeholder="Mute a tag..."
              onKeyDown={(e) => e.key === "Enter" && addMuted()}
            />
          </div>
          <Button variant="outline" onClick={addMuted}>
            Mute
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium">Tag Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage how tags are used in your feed
          </p>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Strict tag filtering</Label>
              <p className="text-sm text-muted-foreground">
                Only show content that matches your followed tags exactly
              </p>
            </div>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Smart tag suggestions</Label>
              <p className="text-sm text-muted-foreground">
                Get recommendations for new tags based on your reading habits
              </p>
            </div>
            <Button size="sm">Disable</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={saveChanges} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save changes"}
        </Button>
      </div>
    </div>
  );
}
